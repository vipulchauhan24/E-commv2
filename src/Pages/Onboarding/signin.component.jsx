import { Box, Button, Stack, TextField } from '@mui/material'
import React, { useRef } from 'react'
import { loginWithEmailAndPassword, signInWithGoogle } from '../../Firebase/Firebase.util'

function SigninContainer() {
    const email = useRef(null);
    const password = useRef(null);

    const login = () => {
        if(password.current.value && email.current.value){
          const data = {
            email : email.current.value,
            password : password.current.value
          }
          loginWithEmailAndPassword(data)
        }
      }
  return (
    <>
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
            inputRef={email}
            />
            <TextField 
            error={false} 
            id="standard-password" 
            type="password" 
            label="Password" 
            variant="standard" 
            inputRef={password}
            />
          </Stack>
        </Box>
        <Stack spacing={2} direction="row">
              <Button onClick={()=>{login()}} variant="contained">Sign In</Button>
              <Button onClick={()=>{signInWithGoogle()}} variant="outlined">Sign In With Google</Button>
        </Stack>
    </>
  )
}

export default SigninContainer