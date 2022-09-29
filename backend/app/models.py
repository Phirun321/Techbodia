from typing import List,Optional
from pydantic import BaseModel, HttpUrl



class Translation(BaseModel):
    official:str
    common:str
    
class Unit(BaseModel):
    name:Optional[str]
    symbol:Optional[str]

class IDD(BaseModel):
    root:Optional[str]
    suffixes:List[str] = []

class Maps(BaseModel):
    googleMaps:Optional[HttpUrl]
    openStreetMaps:Optional[str ]


class Car(BaseModel):
    signs:List[str] = []
    side:str

class Pic(BaseModel):
    png:Optional[HttpUrl]
    svg:Optional[HttpUrl]

class PostalCode(BaseModel):
    format:Optional[str]
    regex:Optional[str]

class Latlng(BaseModel):
    latlng:List[str] = []
class Demonyms(BaseModel):
    f:str
    m:str
class Name(BaseModel):
    common:str
    official:str
    nativeName:Optional[dict[str , Translation]]
class CountryModel(BaseModel):
    name:Optional[Name]
    tld:Optional[List[str]]
    cca2:Optional[str]
    ccn3:Optional[str]
    cca3:Optional[str]
    cioc:Optional[str]
    independent:Optional[bool]
    status:Optional[str]
    unMember:Optional[bool]
    currencies:Optional[dict[str, Unit]]
    idd:Optional[IDD]
    capital:Optional[List[str]]
    altSpellings:Optional[List[str]]
    region:Optional[str]
    subregion:Optional[str]
    languages:Optional[dict[str, str]]
    translations:Optional[dict[str, Translation]]
    latlng:Optional[List[float]]
    landlocked:Optional[bool]
    borders:Optional[List[str]]
    area:Optional[float]
    demonyms:Optional[dict[str, Demonyms]]
    flag:Optional[str]
    maps:Optional[Maps]
    population:Optional[int]
    gini:Optional[dict[str, float]]
    fifa:Optional[str]
    car:Optional[Car]
    timezones:Optional[List[str]]
    continents:Optional[List[str]]
    flags:Optional[Pic]
    coatOfArms:Optional[Pic]
    startOfWeek:Optional[str]
    capitalInfo:Optional[Latlng]
    postalCode:Optional[PostalCode]

