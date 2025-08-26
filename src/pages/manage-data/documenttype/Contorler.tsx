import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { FormControl,InputLabel,Input,FormHelperText
  ,Stack,FormLabel ,FormControlLabel,TextField,MenuItem,Select} from '@mui/material';

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

export default function BasicGrid() {
const [UserType,setUserType]=React.useState();

const handleChange = (event) => {
  setAge(event.target.value);
};
  
  return (  
     <Paper  elevation={3}>
       <Box sx={{ height: 200, width: '100%' }}>

       <Stack
        spacing={{ xs: 1, sm: 2 }}
        direction="row"
        useFlexGap
        sx={{ flexWrap: 'wrap' }}
      >
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Long content</Item>
  <TextField id="outlined-basic" label="Username" variant="outlined" size="small"/>
   <TextField id="outlined-basic" label="Password" variant="outlined"  size="small"/>
   <TextField id="outlined-basic" label="Tel" variant="outlined"  size="small"/>

   <TextField id="outlined-basic" label="Outlined" variant="outlined"  size="small"/>

        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select size="small"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={UserType}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        </Stack>

       </Box>
    </Paper>
  );
}