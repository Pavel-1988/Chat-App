import React from 'react'

// import TextField from '@mui/material/TextField';

const Login = () => {
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='logo'>Pasha Chat</span>
        <span className='title'>Login</span>
        <form action="">
          {/* <TextField id="outlined-basic" label="email" variant="outlined"  /> */}
          <input type="email" placeholder='email' />
          <input type="password" placeholder='password' />
          <button>Sing in</button>
        </form>
        <p>If you don`t have an account. Register</p>
      </div>
    </div>
  )
}

export default Login