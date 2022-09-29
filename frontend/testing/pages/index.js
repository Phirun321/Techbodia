import CardPage from "../components/CardPage"
import React from 'react'
import { Button, Grid, Stack } from "@mui/material"
import OpenState from "../state/open"
import { useRecoilState } from 'recoil'
export default function Home() {
  const [item, setItem] = React.useState()
  const [popUp, setPopUp] = useRecoilState(OpenState)
  const [dataGet, setDataGet] = React.useState(null)
  const [next, setNext] = React.useState(true)
  const [previous, setPrevious] = React.useState(false)
  const [pageNum, setPageNum] = React.useState(1)
  React.useEffect(() => {
    async function fetchData() {
      let response = await fetch(`http://localhost:8000/pagination?page=${pageNum}&size=25`)
      let data = await response.json()
      if (data.items.lenght == 0){
        setNext(false)
      }
      if (data.page >= 2){
        setPrevious(true)
      }
      setItem(data)
    }
    fetchData()
  }, [pageNum])
  //function click to pop up all data
  function handleClick(data) {
    setPopUp(true)
    setDataGet(data)
  }
  //function click to increase page number
  function clickPre(){
    if (pageNum==1){
      setPageNum(1)
      setPrevious(false)
    }else if(pageNum<1){
      setPageNum(1)
      setPrevious(false)
    }else{
      setPageNum(pageNum-1)
    }
  }
  //function click to decrease page number
  function clickNext(){
    setPageNum(pageNum+1)
  }
  return (
    <div >
      <Grid 
      container
      spacing={'5'}
      sx={{mt:5, mb:5}}
        >
        {item?.items.map((el, index) => {
          return <Grid item lg={3} sm={6} md={4} xs={12} 
          display="flex" justifyContent="center" 
          alignItems="center" minWidth={'100'}>
            <CardPage
              flag={el.flags['png']}
              name={el.name.official}
              nativeName={el.name.nativeName['official']}
              cca2={el.cca2}
              cca3={el.cca3}
              altSpelling={el.altSpellings[0]}
              idd={el.idd.root}
              data={dataGet}
              onClick={() => handleClick(el)}
            />
          </Grid>
        })}
        <Grid item lg={12} sm={12} md={12} sx={{mt:5}}>
          <Stack direction={'row'} spacing={10} justifyContent={'center'} alignItems='center'>
            <Button variant="outlined" disabled={previous?false:true} onClick={clickPre}>Previous page</Button>
            <Button variant="outlined" disabled={next?false:true} onClick={clickNext}>Next page</Button>
          </Stack>
        </Grid>
      </Grid>
      
    </div>
  )
}
