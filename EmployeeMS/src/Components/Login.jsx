import React, { useState } from "react";
import axios from 'axios';
import './style.css'

const Login= () =>{

    const [values,setValues]=useState(
        {
            email:"",
            password:'',
          
        }
    )

    const handleSubmit=async (event)=>{
        event.preventDefault()
       await  axios.post('http://localhost:3000/adminlogin',values)
        .then(result=>console.log(result))
        .catch(err=>console.log(err))
    
    }

    return(
        <div className="d-flex justify-content-center align-items-center vh-100 loginPage">
            <div className="p-3 rounded w-25 border loginForm">
                <h2>Login Page</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email">Email: </label>
                        <input type='email' name='email' placeholder="Enter Email" className="form-control rounded-0" onChange = {(e) => setValues({...values,email:e.target.value})}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">Password: </label>
                        <input type='password' name='password' placeholder="Enter Password" className="form-control rounded-0" onChange = {(e) => setValues({...values,password:e.target.value})}/>
                    </div>
                    <button className="btn btn-success w-70 rounded-0 ">Login</button>

                </form>

            </div>
        </div>
    )
}

export default Login
