import React from 'react'
import TextField from '@mui/material/TextField';

const Register = () => {
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='logo'>Pasha Chat</span>
        <span className='title'>Register</span>
        <form action="">
          <input type="text" placeholder='display name' />
          <TextField id="outlined-basic" label="email" variant="outlined"  />
          {/* <input type="email" placeholder='email' /> */}
          <input type="password" placeholder='password' />
          <input type="file" />
          <button>Sing Up</button>
        </form>
        <p>Do you have an account? Login</p>
      </div>
    </div>
  )
}

export default Register