import React, { Fragment } from 'react';
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
    return (
        <div>
            {visitor}
        </div>
    )
}

export default Navbar
