import { useState } from "react"
import {Link, useNavigate} from "react-router-dom"
import Nav from "./nav"

const Signup=()=>{
    const[credentials,setCredentials]=useState({name:"",email:"",password:""})
    const handlevalue=(event)=>{
        setCredentials({...credentials,[event.target.name]:event.target.value})
    }
    const navigate=useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("https://fooddash.onrender.com/api/signup", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password})
    
        });
            const json= await response.json()
            console.log(json)
            navigate('/login')
            if(!json.success){
                alert("enter valid Credentials")
            }
    }
    return(
        <div>
            <Nav/>
            <div className="signup1">
            <div className="signup2">
                <div>
                    <h1 className="headingsignup">Name</h1>
                    <input className="inputsignup" type="text" name="name" value={credentials.name} onChange={handlevalue}></input>
                    <h1 className="headingsignup">Email address</h1>
                    <input className="inputsignup" type="email" name="email" value={credentials.email} onChange={handlevalue}></input>
                    <h1 className="headingsignup">Password</h1>
                    <input className="inputsignup" type="password" name="password" value={credentials.password} onChange={handlevalue}></input>
                </div>
                <div>
                    <button className="signupbtn1" onClick={handleSubmit}>Submit</button>
                    <Link to='/login'><button className="signupbtn2">Already a user</button></Link>
                </div>
            </div>
            </div>
        </div>
    )
}
export default Signup