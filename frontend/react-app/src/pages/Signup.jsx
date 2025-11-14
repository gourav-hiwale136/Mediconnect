import React, { useState } from 'react'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom';
import "../styles/Signup.css";


const Signup = () => {

  const [Userdata,setUserdata] = useState({
    name:"",
    email:"",
    password:"",
  })

  const Navigate = useNavigate()

    const handlechange = (e) => {
      setUserdata({ ...Userdata, [e.target.name]: e.target.value });
    };


    const signFun = async(event) => {
      event.preventDefault()
      try {
        const response = await axios.post("http://localhost:8000/user/signup", Userdata);
        console.log("Signup Successfull", response.data)
        alert("Signup Successfull !")
        Navigate("/login")
      } catch (error) {
        console.log("Signup Failed", error)
        alert("Error Signup !")
      }
      };
      
   
  return (
    <div className="signup-container">
      <form onSubmit={signFun} className="signup-form">
        <h2>Signup</h2>
        <input type="text"  onChange={handlechange} name='name'  placeholder='User name ...' value={Userdata.name}/>
        <input type="email"  onChange={handlechange} name='email' placeholder='E-mail...' value={Userdata.email}/>
        <input type="password" onChange={handlechange} name='password' placeholder='Password...' value={Userdata.password}/>
       <button type="submit">Signup</button>
      </form>
    </div>

    
  );
}

export default Signup