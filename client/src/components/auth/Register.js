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
    }, [isAuthenticated, props.history]) // Im curious about props.history

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
            <div className='container'>
            <form onSubmit={onSubmit}>
                <div class="form-group">
                    <label for="">Name</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Enter name" name='name' value={name} onChange={onFormChange} />
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email" name='email' value={email} onChange={onFormChange} />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" name='password' value={password} onChange={onFormChange} />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Confirm Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Confirm Password" name='password2' value={password2} onChange={onFormChange} />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            </div>
        </div>
    )
}
 
export default Register
