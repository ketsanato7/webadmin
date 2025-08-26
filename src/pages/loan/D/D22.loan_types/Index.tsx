import * as React from 'react';
import Typography from '@mui/material/Typography';
import DataGrid from './Datagrid';
import { Divider } from '@mui/material';
import ImportExcel from './importMaster';
export default function User() {


  const [UserData,setUserData]=React.useState();
  
  return <>

  <Typography>Contorller</Typography>
<ImportExcel/>
  <br/>
  <Typography>ຕາຕະລາງຂໍ່ມູນເມືອງ</Typography>

  <DataGrid/>

  </>


}
