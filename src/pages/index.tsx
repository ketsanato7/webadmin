import * as React from 'react';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useTranslation, Trans } from 'react-i18next';
import File from '../pdf/RestructuringCreditInformation'
import Chart from "../component/IndexChart"
import Gaug from "../component/IndexGaug"
import IndexAnimationChart from "../component/IndexAnimationChart"
import Map from "../component/Map"

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
  const {t,i18n}=useTranslation();
  return (<>
  
  <Typography>{t("Welcome to Dashboard!")}
    {t('title', { name: 'John' })}</Typography>

  <Box sx={{ flexGrow: 1 }} >
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Item sx={{ boxShadow: 3 }}> <Chart/> </Item>
        </Grid>
        <Grid item xs={4}>
          <Item sx={{ boxShadow: 3 }}><Gaug/></Item>
        </Grid>


        <Grid item xs={12}>
                    <Item sx={{ boxShadow: 3 }}></Item>

</Grid>
</Grid>
    </Box>
    
  
  </>)
  
}
