import React, { useState } from 'react';
import logo from '../images/ic_launcher-playstore.svg';
import { Link } from 'react-router-dom';
import { auth } from '../Config/Config';
import { useHistory } from 'react-router-dom';
import Sidebar  from './Sidebar';

export const Navbar = ({ user }) => {

    const history = useHistory();
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    //const { totalQty } = useContext(CartContext);

    // handle logout
    const handleLogout = () => {
        auth.signOut().then(() => {
            history.push('/login');
        })
    }

    return (
        <div className='navbox'>
            <div className='sidebar-menu'>
                <Sidebar />
            </div>
            <div className>
                <div>
                    <h4 className='title'>Shree Bhavani Color</h4>
                </div>
                
            </div>
            
            {user && <div className='rightside'>
                <span><Link to="/" className='navlink'>{user}</Link></span>
                <span><button className='logout-btn' onClick={handleLogout}>Logout</button></span>
            </div>}
        </div>
    )

   {/*
    return (
        <div className='navbox'>
            <div className='leftside'>
                <img src={logo} alt="" />
            </div>
            {!user && <div className='rightside'>
                <span><Link to="signup" className='navlink'>SIGN UP</Link></span>
                <span><Link to="login" className='navlink'>LOGIN</Link></span>
            </div>}
            {user && <div className='rightside'>
                <span><Link to="/" className='navlink'>{user}</Link></span>
                <span><Link to="cartproducts" className='navlink'><Icon icon={cart} /></Link></span>
                <span className='no-of-products'>{totalQty}</span>
                <span><button className='logout-btn' onClick={handleLogout}>Logout</button></span>
            </div>}
        </div>
    )*/
   } 
}


