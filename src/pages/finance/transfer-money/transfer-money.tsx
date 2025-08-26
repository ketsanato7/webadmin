import * as React from 'react';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import {Box,Button} from '@mui/material';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import axios, { API_BANK } from '../../../api/apiIndoChaina';
import DataGird from './Datagrid';
import { UserContext } from '../../../context/Context';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function DashboardPage() {
  const [data,setData]=React.useState();
const [token,setToken]=React.useState();

const connect =(e)=>{
  const data3={
  "memberId": "WHATDAY",
  "memberPassword": "854a9eb84ff2a9d192cd4010657a328fd6bdbf9d8152946b02b35b840812a5e2b02f211017b4ab7e7d6e8582ef3de1d0341ce5017eeb0f98f9fd76981c08e4c0",
  "loginKey": "12345678"
}
const requestOptions = {
  method: "POST",
  headers: {"Content-Type":"application/json"},
  body: JSON.stringify(data3),
  redirect: "follow",
}

fetch(`${import.meta.env.VITE_URL_SERVER_INDOCHAIN_BANK}/member/login`, requestOptions)
  .then((response) => response.text())
  .then((result) => {console.log(result)
    setToken(result)
  })
  .catch((error) => console.error(error));   
}

return (
<>

    <UserContext.Provider value={{data,setData}}>
  
  <Typography>Transfer Money</Typography>

  <Button variant="contained" size="large" onClick={connect}>
          Large
        </Button>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Item sx={{ boxShadow: 3 }}>
          <Typography>ຈຳນວນເງິນທັງໝົດຢູ່ມະນາຄານ</Typography>
            
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item sx={{ boxShadow: 3 }}>
          <Typography>ຈຳນວນເງິນໃນລະບົບ</Typography>
            </Item>
        </Grid>
        <Grid item xs={4}>
          <Item sx={{ boxShadow: 3 }}>
          <Typography></Typography>

          
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item sx={{ boxShadow: 3 }}>xs=8</Item>
        </Grid>

      </Grid>
<DataGird/>

      </UserContext.Provider>
    

  
  </>)
  
}
