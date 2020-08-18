import React, { Fragment, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

const visitor = (
    <Fragment>
        <nav className='Navbar'>
            <ul>
                <h4>Money Record</h4>
                <li><Link to='/auth/register'>Register</Link></li>
                <li><Link to='/auth/login'>Login</Link></li>
            </ul>
        </nav>
    </Fragment>
)

function Navbar() {
    const authContext = useContext(AuthContext);
    const { isAuthenticated, logout, user } = authContext;
    
    const onLogout = () => {
        logout();
    }

    const auth = (
        <Fragment>
            <ul>
                <h4>Money Record</h4>
                <li><a onClick={onLogout} href="!#"><span>Logout</span></a></li>
            </ul>
        </Fragment>
    )

    useEffect(() => {

    }, [isAuthenticated]);

    return (
        <div>
            { isAuthenticated ? auth : visitor }
        </div>
    )
}

export default Navbar
