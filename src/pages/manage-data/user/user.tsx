import * as React from 'react';
import Typography from '@mui/material/Typography';
import DataGrid from './Datagrid';
import { Divider } from '@mui/material';
import ImportFile from './importMaster';
import { UserContext } from '../../../context/Context';
export default function User() {
  const [UserData,setUserData]=React.useState();
  
  return <>
  <UserContext.Provider value={{UserData,setUserData}}>

  <Typography>Contorller</Typography>


  <br/>
  <ImportFile/>
  <Typography>Table</Typography>

  <DataGrid/>
  </UserContext.Provider>

  </>


}
