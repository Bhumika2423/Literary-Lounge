import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'

import logo from '../Assets/logo.png'
import cart_icon from '../Assets/grocery-store.png'
import { Link } from 'react-router-dom'
import { EcomContext } from '../../Context/EcomContext'
import drop_icon from '../Assets/drop_icon.png';

const Navbar = () => {

    const [menu, setMenu] = useState("home");
    const {getTotalCartItems} = useContext(EcomContext);
    const menuRef = useRef();

    const dropdown_toggle = (e) =>{
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }
    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt="" />
                <p>Comics House</p>
            </div>
            <img className='nav-dropdown' onClick={dropdown_toggle} src={drop_icon} alt="" />
            <ul ref={menuRef}className='nav-menu'>
                <li onClick={() => { setMenu("home") }}><Link style={{ textDecoration: 'none' }} to='/'>Home</Link>{menu === "home" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("newReleases") }}><Link style={{ textDecoration: 'none' }} to='/newReleases'>New Release</Link>{menu === "newReleases" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("bestSellers") }}><Link style={{ textDecoration: 'none' }} to='/bestSellers'>Best Seller</Link>{menu === "bestSellers" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("classicTitles") }}><Link style={{ textDecoration: 'none' }} to='/classicTitles'>Classic Title</Link>{menu === "classicTitles" ? <hr /> : <></>}</li>
            </ul>
            <div className='nav-login-cart'>
                {localStorage.getItem('auth.token')?<button onClick={()=>{localStorage.removeItem('auth.token');window.location.replace('/')}}>Logout</button>:<Link to='/login'><button>Login</button></Link>}
                <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    )
}

export default Navbar
