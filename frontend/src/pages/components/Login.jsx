import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
export default function Register() {
    const navigate=useNavigate();// initilized
    const[formData,setFormData]=useState({
        
        email:"",
        password:"",
        
    })
    console.log(formData);

    const handleChange=(e)=>{
       setFormData({
        ...formData,
        [e.target.name]:e.target.value,
       })
    }

    const validateForm=()=>{
       

        if(!formData.email.trim()){
          alert("Please provide email");
          return false;
        }

        if(!formData.password.trim()){
          alert("Please provide password");
          return false;
        }

        return true;
        
    }

    const handleSubmit=function(e){
       e.preventDefault()
     
        if(!validateForm()){
          return;
        }else{
           alert("Form submitted successfully")
        }
          
        navigate('/')
       
    }

  return (
    <>
      <div className='min-h-screen bg-gay-100 py-10 px-5 '>
        <div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-10 '>
            {/* Registration Form  */}
            <div className='bg-white shadow-lg rounded-xl p-8'>
                <h1 className='text-3xl font-bold text-center text-blue-600 mb-8'>Student Login Form</h1>
                <form className='space-y-5' onSubmit={handleSubmit}>
                    
                    <label className='block mb-2 font-semibold'>Email</label>
                    <input type="email" 
                    placeholder='Enter your Email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    className='w-full' border rounded-lg p-3 focus:ring-2 focus:ring-blue-200 outline-none
                    />
                    <label className='block mb-2 font-semibold'>Password</label>
                    <input type="password" 
                    placeholder='Enter your password'
                    name='password'
                    value={formData.password}
                    onChange={handleChange}
                    className='w-full' border rounded-lg p-3 focus:ring-2 focus:ring-blue-200 outline-none
                    />
                    
                    <button type='submit'
                    className='bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700'>Login</button>
                    <p onClick={()=>navigate('/register')}>Register</p>
                </form>

            </div>
           
        </div>

      </div>
    </>
  )
}
