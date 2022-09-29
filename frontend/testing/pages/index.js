import CardPage from "../components/CardPage"
import React from 'react'
import { Grid } from "@mui/material"
import OpenState from "../state/open"
import {useRecoilState} from 'recoil'
export default function Home() {
  const [item, setItem] = React.useState()
  const [popUp, setPopUp] = useRecoilState(OpenState)
  const [dataGet, setDataGet] = React.useState(null)
  React.useEffect(() => {
    async function fetchData() {
      let response = await fetch('http://localhost:8000/pagination?page=10&size=2')
      let data = await response.json()
      setItem(data)
    }
    fetchData()
  }, [])
  function handleClick(data){
    setPopUp(true)
    setDataGet(data)
  }
  return (
    <div >
      <Grid container spacing={2}>
        {item?.items.map((el, index) => {
          return <Grid item lg={3} sm={6} md={4} xs={12}>
            <CardPage
              flag={el.flags['png']}
              name={el.name.official}
              nativeName={el.name.nativeName.eng['official']}
              cca2={el.cca2}
              cca3={el.cca3}
              altSpelling={el.altSpellings[0]}
              idd={el.idd.root}
              data={dataGet}
              onClick={()=>handleClick(el)}
            />
          </Grid>
        })}
      </Grid>
    </div>
  )
}
