import { Box, Button, Stack, TextField } from '@mui/material'
import React, { useRef } from 'react'
import { signUpWithEmailAndPassword } from '../../Firebase/Firebase.util'

function SignupContainer() {
    const name = useRef(null)
    const email = useRef(null)
    const password = useRef(null)
    const confirmPassword = useRef(null)
  
    const signUp = () => {
      if(password.current.value === confirmPassword.current.value && password.current.value && confirmPassword.current.value){
        const data = {
          displayName : name.current.value,
          email : email.current.value,
          photoURL : '',
          password : password.current.value
        }
        signUpWithEmailAndPassword(data)
      }
    }
  return (
    <>
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
            inputRef={name}
            />
            <TextField 
            error={false} 
            id="standard-email-signup" 
            type="email" 
            label="Email" 
            variant="standard" 
            inputRef={email}
            />
            <TextField 
            error={false} 
            id="standard-password-signup" 
            type="password" 
            label="Password" 
            variant="standard" 
            inputRef={password}
            />
            <TextField 
            error={false} 
            id="standard-cpassword-signup" 
            type="password" 
            label="Confirm Password" 
            variant="standard" 
            inputRef={confirmPassword}
            />
          </Stack>
        </Box>
        <Stack spacing={2} direction="row">
              <Button onClick={signUp} variant="contained">Sign Up</Button>
        </Stack>
    </>
  )
}

export default SignupContainer