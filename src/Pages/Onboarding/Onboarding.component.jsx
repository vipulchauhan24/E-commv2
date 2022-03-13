import React, { Component } from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { signInWithGoogle } from '../../Firebase/Firebase.util';


export default class OnboardingComponent extends Component {
  
  render() {
    return (
      <Box sx={{ flexGrow: 1 , padding : '1.5rem'}}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <h2>I already have an account.</h2>
          <h4>Sign in with your email and password.</h4>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <Stack spacing={2} direction="column">
              <TextField 
              error={false} 
              id="standard-email" 
              type="email" 
              label="Email" 
              variant="standard" 
              />
              <TextField 
              error={false} 
              id="standard-password" 
              type="password" 
              label="Password" 
              variant="standard" 
              />
            </Stack>
          </Box>
          <Stack spacing={2} direction="row">
                <Button variant="contained">Sign In</Button>
                <Button onClick={()=>{signInWithGoogle()}} variant="outlined">Sign In With Google</Button>
          </Stack>
        </Grid>
        <Grid item xs={6}>
        <h2>I do not have an account.</h2>
          <h4>Sign up with your email and password.</h4>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <Stack spacing={2} direction="column">
              <TextField 
              error={false} 
              id="standard-name" 
              type="text" 
              label="Display name" 
              variant="standard" 
              />
              <TextField 
              error={false} 
              id="standard-email-signup" 
              type="email" 
              label="Email" 
              variant="standard" 
              />
              <TextField 
              error={false} 
              id="standard-password-signup" 
              type="password" 
              label="Password" 
              variant="standard" 
              />
              <TextField 
              error={false} 
              id="standard-cpassword-signup" 
              type="password" 
              label="Confirm Password" 
              variant="standard" 
              />
            </Stack>
          </Box>
          <Stack spacing={2} direction="row">
                <Button variant="contained">Sign Up</Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
    )
  }
}
