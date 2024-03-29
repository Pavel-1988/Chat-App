import React, { useState } from 'react'
import addAvatar from "../img/addAvatar.png"
// import TextField from '@mui/material/TextField';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, storage } from '../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const Register = () => {
  const [err, setErr] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(e.target[0].value)
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          setErr(true)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log('File available at', downloadURL);
          });
        }
      );
    } catch (err) {
      setErr(true)
    };
  };

  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='logo'>Pasha Chat</span>
        <span className='title'>Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='display name' />
          {/* <TextField id="outlined-basic" label="email" variant="outlined"  /> */}
          <input type="email" placeholder='email' />
          <input type="password" placeholder='password' />
          <input style={{display:"none"}}type="file" id="file" />
          <label htmlFor="file">
            <img src={addAvatar} alt="" />
            <span> Add an avatar</span>
          </label>
          <button>Sing Up</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>Do you have an account? Login</p>
      </div>
    </div>
  )
}

export default Register