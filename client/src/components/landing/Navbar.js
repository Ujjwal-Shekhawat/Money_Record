import React from 'react'

function Navbar() {
    return (
        <div>
            <nav className='Navbar'>
                <ul>
                    <h4>Money Record</h4>
                    <li><a href ='/auth/register'>Regester</a></li>
                    <li><a href ='/auth/login'>Login</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
