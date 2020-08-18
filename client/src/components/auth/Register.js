import React, {useState, useEffect, useContext} from 'react'
import AuthContext from '../../context/auth/authContext';

const Register = (props) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const authContext = useContext(AuthContext);
    const { register, error, isAuthenticated } = authContext;

    useEffect(() => {
        if(isAuthenticated) {
            props.history.push('/');
        }
        else {
            console.log(error);
        }
    })

    const { name, email, password,password2 } = formData;

    const onFormChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        //console.log(`Data Updated`);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        if(name === '' || email === '' || password === '') {
            alert(`Please enter valid credentials`);
        }
        else if(password !== password2) {
            alert(`Passwords do not match`);
        }
        else {
            register( { name, email, password } );
        }
    } 

    return (
        <div className="login-box">
            <h2>Register</h2>
            <form>
                <div className="user-box">
                    <input type="text" name='name' value={name} onChange={onFormChange}/>
                    <label>Username</label>
                </div>
                <div className="user-box">
                    <input type='email' name='email' value={email} onChange={onFormChange}/>
                    <label>Email</label>
                </div>
                <div className="user-box">
                    <input type="password" name='password' value={password} onChange={onFormChange}/>
                    <label>Password</label>
                </div>
                <div className="user-box">
                    <input type="password" name='password2' value={password2} onChange={onFormChange}/>
                    <label>Confirm Password</label>
                </div>
                <a onClick={onSubmit}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                Register
                </a>
            </form>
        </div>
    )
}
 
export default Register
