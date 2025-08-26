import * as React from 'react';
import Typography from '@mui/material/Typography';
import DataGrid from './Datagrid';
import { Divider } from '@mui/material';
import Inset from './InsertData';
import {Query} from '../../../store/22.mfi_info'
import { useQuery } from '@tanstack/react-query'


export default function personal_infoUser() {


  const [UserData,setUserData]=React.useState();
  return <>

  <Typography>Contorller</Typography>

  <Typography>ຕາຕະລາງຂໍ່ມູນເມືອງ</Typography>

  <DataGrid/>

  </>


}
