import json
from urllib import response
from fastapi import FastAPI
import requests
from .models import CountryModel
from fastapi_pagination import Page, add_pagination, paginate, Params
from typing import List
from .urls import LIST_ALL

from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost:8000",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
headers = {
        'Accept-Language': "en-US,en;q=0.9",
        'Accept-Encoding': "gzip, deflate, br",
        'Accept':'application/json'
}
@app.get("/all", response_model=List[CountryModel])
async def listAll():
    response = requests.request("GET", LIST_ALL, headers=headers)
    data = json.loads(response.text)
    return data

@app.get("/pagination", response_model=Page[CountryModel])
async def pagination():
    """
    You can set size what you want in below dialog 
    """
    response = requests.request("GET", LIST_ALL, headers=headers)
    data = json.loads(response.text)
    return_data = paginate(data)
    return return_data

add_pagination(app)
