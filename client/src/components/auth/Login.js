import React, { Fragment, useState, useEffect, useContext } from 'react';
import AuthContext from '../../context/auth/authContext';

const Login = (props) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const authContext = useContext(AuthContext);
    const { login, isAuthenticated, loading } = authContext;
    const { email, password } = formData;
    
    useEffect(() => {
        if(isAuthenticated) {
            props.history.push('/');
        }
    }, [isAuthenticated, props.history, loading]);
    
    
    const onChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(email === '' || password === '') {
            alert(`Please fill out the feilds`);
        }
        else {
            //alert(`We will log you in soon`);
            login( { email, password } );
        }
    };
    
    

    return (
        <div>
            <div className='container'>
            <br />
            <br />
            <br />
            <form onSubmit={onSubmit}>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email" name='email' value={email} onChange={onChange} />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" name='password' value={password} onChange={onChange} />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            </div>
        </div>
    )
}

export default Login

// Credits https://freefrontend.com/css-forms/  

//temp useing loading