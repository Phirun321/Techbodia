import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import React from 'react'
import CardDetail from './CardDetail';
import OpenState from '../state/open';
import {useRecoilState} from 'recoil'
export default function CardPage({flag,name,nativeName, cca2, cca3, altSpelling,idd,data, onClick}) {
    const [popUp, setPopUp] = useRecoilState(OpenState)
    const [dataGet, setDataGet] = React.useState([])
    return <>
    <CardDetail data={data}/>
    {console.log('data get::::', data)}
    <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            component="img"
            height="140"
            image={flag}
            alt="Micronesia"
        />
        <CardContent>
            <Typography variant='h6'>{name}</Typography>
            <Typography variant='span' sx={{ color: 'gray' }}>{nativeName}</Typography>
            <Stack direction={'row'} spacing={2.5}>
                <Typography>{cca2}</Typography>
                <Typography>{cca3}</Typography>
                <Typography>{idd}</Typography>
                <Typography>{altSpelling}</Typography>
            </Stack>
        </CardContent>
        <CardActions>
            <Button onClick={onClick}>See detail</Button>
        </CardActions>
    </Card>
    </>
}