

import React from 'react'
import { useState } from 'react'
export default function Form() {
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    console.log(name)
  return (
    <> 
       <h1>Student Registration Form</h1>
       <label>Name</label>
       <input type="text"
       placeholder='Enter Your name' 
       value={name}
       onChange={(e)=>setName(e.target.value)}/><br />  <br />
       <label>Email</label>
       <input type="text"
       placeholder='Enter Your name' 
       value={email}
       onChange={(e)=>setEmail(e.target.value)}/><br />  <br />
       <label>Password</label>
       <input type="text"
       placeholder='Enter Your name' 
       value={password}
       onChange={(e)=>setPassword(e.target.value)}/><br />  <br />
       
       <button>Submit</button> 


       <h2>Live Preview</h2>
       <p>Name:{name}</p>
       <p>Email:{email}</p>
       <p>Password:{password}</p>
    </>
  )
}
