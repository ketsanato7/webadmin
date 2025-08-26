import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { CircularProgress, Fab, FormControl } from '@mui/material';
import {Check, Circle} from '@mui/icons-material';
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

export default function BasicGrid({params,rowId,setRowId}) {

const [loading,setLoading] = React.useState(false);

const [success,setSuccess] = React.useState(false);
  const click = async()=>{
setLoading(true );

setLoading(false);

  }
  return (
    <Box sx={{ m:1,position:'relative' }} >
   {

    success ?(
    <Fab color='primary' sm={{width:40}}>
    
    <Check/>
    </Fab>
  
  ):(
    <Fab 
    color='primary' sm={{width:40}}
    disabled={params.id != rowId || loading}
    
    >
    
    <Save/>
    </Fab>
  
  )
    
   }
   {loading && ( <CircularProgress size={52}/>
   
   ) }

   </Box>
  
  )
}