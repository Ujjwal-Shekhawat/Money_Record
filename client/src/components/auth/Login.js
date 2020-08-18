import React, { useState, useEffect, useContext } from 'react';
import AuthContext from '../../context/auth/authContext';

const Login = (props) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const authContext = useContext(AuthContext);
    const { login, isAuthenticated } = AuthContext;
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
        <div>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Email: </label>
                    <input type='email' name='email' value={email} onChange={onChange}></input>
                </div>
                <div>
                    <label>Password</label>
                    <input type='password' name='password' minLength='7' value={password} onChange={onChange}></input>
                </div>
                <div>
                    <input type='submit' value='Login'></input>
                </div>
            </form>
        </div>
    )
}

export default Login
