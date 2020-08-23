import React, { Fragment, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

const visitor = (
    <div>
        {/* <nav className='Navbar'>
            <ul>
                <h4>Money Record</h4>
                <li><Link to='/auth/register'>Register</Link></li>
                <li><Link to='/auth/login'>Login</Link></li>
            </ul>
        </nav> */}
        <nav class='navbar navbar-dark navbar-expand-sm fixed-top'>
        <div class='container'>
            <button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#Navbar'>
                <span class='navbar-toggler-icon' href='#'></span>
            </button>
            <a class='navbar-brand mr-auto' href='#'>ICON</a>
            <div class='collapse navbar-collapse' id='Navbar'>
                <ul class='navbar-nav mr-auto'>
                    <li class='nav-item'><a class='nav-link active' href='#'><span class='fa fa-home'></span>Home</a></li>
                    <li class='nav-item'><a class='nav-link' href='aboutus.html'><span class='fa fa-info'></span>About Us</a></li>
                    <li class='nav-item'><a class='nav-link' href='#'><span class='fa fa-list'></span>Menu</a></li>
                    <li class='nav-item'><a class='nav-link' href='#'><span class='fa fa-address-card'></span>Contact</a></li>
                </ul>
            </div>
        </div>
    </nav>
    </div>
)

function Navbar() {
    const authContext = useContext(AuthContext);
    const { isAuthenticated, logout, user, loading } = authContext;
    
    const onLogout = () => {
        logout();
    }

    const auth = (
        <Fragment>
            <ul>
                <h4>Money Record</h4>
                <li><a onClick={onLogout} href="/auth/login"><span>Logout</span></a></li>
            </ul>
        </Fragment>
    )

    useEffect(() => {

    }, [isAuthenticated, user]);

    return (
        <div>
            { (isAuthenticated && !loading) ? auth : visitor }
        </div>
    )
}

export default Navbar
