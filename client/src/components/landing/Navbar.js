import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <nav className='Navbar'>
                <ul>
                    <h4>Money Record</h4>
                    <li><Link to='/auth/register'>Register</Link></li>
                    <li><Link to='/auth/login'>Login</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
