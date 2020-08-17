import React from 'react'

const Register = (props) => {
    const [formData, setFormData] = usestate({
        name: '',
        email: '',
        password1: '',
        password2: ''
    });

    const onFonrmChange = (e) => {
        setFormData = ({ ...formData, [e.target.name]: e.target.value });
    };
    const onSubmit = (e) => {
        e.preventDefault();
        if(password1 !== password2) {
            alert(`Passwords do not match`);
        }
        else {
            alert(`Regestration success`);
        }
    } 

    return (
        <div>
            
        </div>
    )
}

export default Register
