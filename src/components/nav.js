import { Link, useNavigate } from "react-router-dom"

const Nav=()=>{
    const navigate=useNavigate()
    const handlelogout=()=>{
        localStorage.removeItem("authtoken")
        navigate('/login')
    }
    return(
        <div className="nav">
            <div className="nav1">
                <Link to='/'><h1 className="logo">FoodDash</h1></Link>
            </div>
            <div className="nav2">
                {localStorage.getItem("authtoken")?
                <div>
                <Link to='/login'><button className="navbtn1">Cart</button></Link>
                <button onClick={handlelogout} className="navbtn2">Logout</button>
                </div>
                        :<div>
                <Link to='/login'><button className="navbtn1">Login</button></Link>
                <Link to='/signup'><button className="navbtn2">Signup</button></Link>
                </div>}
                
                
            </div>
        </div>
    )
}
export default Nav