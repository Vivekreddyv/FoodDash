import { useState } from "react"
import {Link} from "react-router-dom"
import {useNavigate} from "react-router-dom"
import Nav from "./nav"
 
const Login=()=>{
    const navigate=useNavigate()
    const [credentials,setCredentials]=useState({email:"",password:""})
    const handlechange=(event)=>{
        setCredentials({...credentials,[event.target.name]:event.target.value})
    }
    const handlesubmit=async(e)=>{
        e.preventDefault()
        const response=await fetch('http://localhost:5000/api/login',{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({email:credentials.email,password:credentials.password})
            
        })
        const json= await response.json()
            console.log(json)
            if(!json.success){
                alert("enter valid Credentials")
            }
            if(json.success){
                localStorage.setItem("authtoken",json.authToken)
                navigate('/')
                const token=localStorage.getItem("authtoken")
                console.log(token)
            }
    }
    return(
        <div>
            <Nav/>
            <div className="login1">
            <div className="login2">
                <div>
                    <h1 className="heading">Email address</h1>
                    <input className="input" type="email" name="email" value={credentials.email} onChange={handlechange}></input>
                    <p className="para">we'II never share your email with anyone &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email:&nbsp;test1@gmail.com&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Password:test1234</p>
                    <h1 className="heading">Password</h1>
                    <input className="input" type="password" name="password" value={credentials.password} onChange={handlechange}></input>
                </div>
                <div>
                    <button className="loginbtn1" onClick={handlesubmit}>Login</button>
                    <Link to='/signup'><button className="loginbtn2">New User</button></Link>
                </div>
            </div>
            </div>
        </div>
    )
}
export default Login