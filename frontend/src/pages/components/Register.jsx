import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
export default function Register() {
    const navigate=useNavigate();
    const[formData,setFormData]=useState({
        name:"",
        email:"",
        password:"",
        course:"",
        skills:"",
        role:"student"
    })
    console.log(formData);

    const handleChange=(e)=>{
       setFormData({
        ...formData,
        [e.target.name]:e.target.value,
       })
    }

    const validateForm=()=>{
        if(!formData.name.trim()){
          alert("please provide name");
          return false;
        }

        if(!formData.email.trim()){
          alert("Please provide email");
          return false;
        }

        if(!formData.password.trim()){
          alert("Please provide password");
          return false;
        }
         if(!formData.skills.trim()){
          alert("Please provide skills");
          return false;
        }

        return true;
    }

    const handleSubmit=function(e){
        e.preventDefault(); // prevents reloading
        if(!validateForm()){
          return;
        }else{
          alert("Form submitted successfully")  
        }

        navigate('/login')
        
    }

  return (
    <>
      <div className="min-h-screen bg-gray-100 py-10 px-5">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* Registration Form */}

        <div className="bg-white shadow-lg rounded-xl p-8">

          <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
            Student Registration
          </h1>
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Name */}

            <div>
              <label className="block mb-2 font-semibold">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                placeholder="Enter Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />

            
            </div>

            {/* Email */}

            <div>
              <label className="block mb-2 font-semibold">
                Email
              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />

              
            </div>

            {/* Password */}

            <div>
              <label className="block mb-2 font-semibold">
                Password
              </label>

              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />

              
            </div>

            {/* Course */}

            <div>
              <label className="block mb-2 font-semibold">
                Course
              </label>

              <input
                type="text"
                name="course"
                placeholder="Enter Course"
                value={formData.course}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />

              
            </div>

            {/* Skills */}

            <div>
              <label className="block mb-2 font-semibold">
                Skills
              </label>

              <input
                type="text"
                name="skills"
                placeholder="React, Node.js, MongoDB"
                value={formData.skills}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />

              
            </div>

            {/* Role */}

            <div>
              <label className="block mb-2 font-semibold">
                Role
              </label>

              <input
                type="text"
                value={formData.role}
                readOnly
                className="w-full border rounded-lg p-3 bg-gray-200 cursor-not-allowed"
              />
            </div>

            <button
              type="submit"
              // onClick={()=>navigat('/')}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold py-3 rounded-lg transition"
            >
             Register Student
            </button>
            
          </form>

        </div>

        {/* Live Preview */}

        <div className="bg-white shadow-lg rounded-xl p-8">

          <h2 className="text-3xl font-bold text-green-600 text-center mb-6">
            Live Preview
          </h2>

          <div className="space-y-4 text-lg">

            <p><strong>Name:</strong> {formData.name || "-"}</p>

            <p><strong>Email:</strong> {formData.email || "-"}</p>

            <p><strong>Password:</strong> {formData.password || "-"}</p>

            <p><strong>Course:</strong> {formData.course || "-"}</p>

            <p><strong>Skills:</strong> {formData.skills || "-"}</p>

            <p><strong>Role:</strong> {formData.role}</p>

          </div>

        </div>

      </div>
    </div>
    </>
  )
}
