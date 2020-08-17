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
        <div>
            <form onSubmit={onSubmit}>
                <label>Name</label>
                <input type='text' name='name' value={name} onChange={onFormChange}></input><br />
                <label>Email</label>
                <input type='email' name='email' value={email} onChange={onFormChange}></input><br />
                <label>Password</label>
                <input type='password' name='password' minLength='6' value={password} onChange={onFormChange}></input><br />
                <labe>Confirm password</labe>
                <input type='password' name='password2' minLength='6' value={password2} onChange={onFormChange}></input><br />
                <input type='submit' vlaue='Submit' />
            </form>
        </div>
    )
}
 
export default Register
