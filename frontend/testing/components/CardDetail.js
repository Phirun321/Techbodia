import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import {useRecoilState} from 'recoil';
import OpenState from '../state/open';
import { Stack } from '@mui/material';
import Link from 'next/link'
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CardDetail({data}) {
  const [open, setOpen] = useRecoilState(OpenState)

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  {console.log('data:::::', data)}
  return (
    <div>
      {data != null &&<BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          {data?.name.official}
        </BootstrapDialogTitle>
        <DialogContent dividers sx={{width:500}}>
            <Stack><img src={data.flags['png']} sx={{width:200}}></img></Stack>
          <Stack direction={'row'}>
            <Typography>{data.name.nativeName['official']}</Typography>
          </Stack>
          <Stack direction={'row'} spacing={5}>
            <Typography>{data.tld[0]}</Typography>
            <Typography>{data.cca2}</Typography>
            <Typography>{data.ccn3}</Typography>
          </Stack>
          <Stack direction={'row'} spacing={3}>
            <Typography>{data.cca3}</Typography>
            <Typography>{data.cioc}</Typography>
            <Typography>{data.status}</Typography>
          </Stack>
          <Stack direction={'row'} spacing={3}>
            <Typography>{data.altSpellings[1]}</Typography>
            <Typography>{data.latlng[0]}</Typography>
            <Typography>{data.latlng[1]}</Typography>
          </Stack>
          <Typography>This country hase population {data.population}</Typography>
          <Stack direction={'row'} spacing={5}>
          <Typography  sx={{color:'blue'}}><Link href={data.maps['googleMaps'] || 'example.png'}>view on map</Link></Typography>
          <Typography  sx={{color:'red'}}><Link href={data.coatOfArms['png'] || 'example.png'}>view coat of arms</Link></Typography>
          </Stack>

        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            close
          </Button>
        </DialogActions>
      </BootstrapDialog>}
    </div>
  );
}
