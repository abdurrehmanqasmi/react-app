import React, { useState, useContext} from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import logo from "../Assets/shopper.png"
import Carticon from "../Assets/cart.png"
import { ShopContext } from '../../Context/ShopContext';
 
const Navbar = () => {
    const [menu,setMenu] = useState("shop")
    const {getTotalCartItem} = useContext(ShopContext)
    
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt="" />
            <p>SHOPPER</p>

        </div>
            <ul className='nav-menu'>
        <li onClick={()=> {setMenu("shop")}}> <Link style={{textDecoration : "none"}}to="/">Shop</Link> {menu=== "shop"?<hr/>:<></>}</li>
        <li onClick={()=> {setMenu("carpet")}}><Link style={{textDecoration : "none"}} to="/carpet">Carpet</Link> {menu=== "carpet"?<hr/>:<></>}</li>
        <li onClick={()=> {setMenu("cushion")}}><Link style={{textDecoration : "none"}}to="/cushion">Cushion</Link> {menu=== "cushion"?<hr/>:<></>}</li>
        <li onClick={()=> {setMenu("curtain")}}><Link style={{textDecoration : "none"}}to="/curtain">Curtain</Link> {menu=== "curtain"?<hr/>:<></>}</li>
      </ul>
      <div className='nav-login-cart'>
        {localStorage.getItem('auth-token')
        ? <button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
        : <Link to="/login"><button>Login</button></Link>}
        
         <Link to="/cart"> <img src={Carticon} alt="" /></Link>  
            <div className="nav-cart-count">{getTotalCartItem()}</div>
            
      </div>
    
    </div>
  )
}

export default Navbar
