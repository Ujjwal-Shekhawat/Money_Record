import React, { Fragment, useState, useEffect, useContext } from 'react';
import AuthContext from '../../context/auth/authContext';

const Login = (props) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const authContext = useContext(AuthContext);
    const { login, isAuthenticated } = authContext;
    const { email, password } = formData;

    useEffect(() => {
        if(isAuthenticated) {
            props.history.push('/');
        }
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();
        if(email == '' || password == '') {
            alert(`Please fill out the feilds`);
        }
        else {
            //alert(`We will log you in soon`);
            login({ email, password });
        }
    };

    const onChange = (e) => {
        setFormData({...formData, [e.target.name]: [e.target.value]});
    }

    return (
        <Fragment>
            <div className="login-box">
                <h2>Login</h2>
                <form>
                    <div className="user-box">
                        <input type='email' name='email' value={email} onChange={onChange} />
                        <label>Email</label>
                    </div>
                    <div className="user-box">
                        <input type='password' name='password' value={password} onChange={onChange} />
                        <label>Password</label>
                    </div>
                    <a onClick={onSubmit}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    Submit
                    </a>
                </form>
            </div>
        </Fragment>
    )
}

export default Login

// Credits https://freefrontend.com/css-forms/  