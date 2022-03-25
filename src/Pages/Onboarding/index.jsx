import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import SigninContainer from '../../Components/Signin';
import SignupContainer from '../../Components/Signup';


export default function OnboardingComponent() {

  return (
    <Box sx={{ flexGrow: 1 , padding : '1.5rem'}}>
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <SigninContainer/>
      </Grid>
      <Grid item xs={6}>
        <SignupContainer/>
      </Grid>
    </Grid>
  </Box>
  )
}
