import * as React from 'react';
import Typography from '@mui/material/Typography';
import DataGrid from './Datagrid';
import Contorller from './Contorler';
import { Divider } from '@mui/material';
import ImportFile from './ImportFileExcel';
import { UserContext } from '../../../context/Context';
export default function User() {
  const [UserData,setUserData]=React.useState();
  
  return <>
  <UserContext.Provider value={{UserData,setUserData}}>

  <Typography>User Type</Typography>

  <br/>
  <ImportFile/>
  <Typography>Table</Typography>

  <DataGrid/>
  </UserContext.Provider>

  </>


}
