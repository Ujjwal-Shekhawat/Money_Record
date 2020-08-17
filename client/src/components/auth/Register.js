import React, {useState} from 'react'

const Register = (props) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password1: '',
        password2: ''
    });

    const { name, email, password1,password2 } = formData;

    const onFormChange = (e) => {
        setFormData = ({ ...formData, [e.target.name]: e.target.value });
        console.log(`Data Updated`);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        if(name == '' || email == '' || password1 == '') {
            alert(`Please enter valid credentials`);
        }
        else if(password1 !== password2) {
            alert(`Passwords do not match`);
        }
        else {
            alert(`Regestration success`);
        }
    } 

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>Name</label>
                <input type='text' name='name' onChange={onFormChange }></input>
                <label>Email</label>
                <input type='email' name='email' onChange={onFormChange }></input>
                <label>Password</label>
                <input type='password' name='password1' onChange={onFormChange }></input>
                <labe>Confirm password</labe>
                <input type='password' name='password2' onChange={onFormChange }></input>
                <input type='submit' vlaue='Submit' />
            </form>
        </div>
    )
}

export default Register
