import * as React from 'react';
import Typography from '@mui/material/Typography';
import DataGrid from './Datagrid';
import { Box, Container, Divider, Grid, Paper, styled } from '@mui/material';
import ImportExcel from './importMaster';
import Item from '../../../component/Item';


export default function User() {

  return <>

  <Typography>Contorller</Typography>
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
  <br/>
  <Typography>ຕາຕະລາງຂໍ່ມູນເມືອງ</Typography>


  <DataGrid/>

  </>


}
