import * as React from 'react';
import Typography from '@mui/material/Typography';
import DataGrid from './Datagrid';
import { Divider } from '@mui/material';
import ImportFile from './ImportFileExcel';
import { UserContext } from '../../../context/Context';

export default function User() {
  const [UserData,setUserData]=React.useState();
  
  return <>
  <UserContext.Provider value={{UserData,setUserData}}>

  <Typography>Contorller</Typography>

  <br/>
        <ImportFile/>


  <Typography>ຕາຕະລາງຂໍ່ມູນບ້ານ</Typography>
  <DataGrid/>
  </UserContext.Provider>

  </>


}