import React, { useContext, useEffect } from 'react';
//import AuthContext from '../../context/auth/authContext';
import AuthContext from '../../context/auth/authContext';
import { Redirect } from 'react-router-dom';
import Transactions from './Transactions';

//Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    const authContext = useContext(AuthContext);
    
    const { user, isAuthenticated, loading } = authContext;

    useEffect(() => {
        authContext.loadUser();
    }, [loading, isAuthenticated]);

    return (
        <header className='decide'>
            { (isAuthenticated && !loading) ? <Transactions value={user}/> : (!loading) ? <Redirect to="/auth/login" /> : <h1>Loading</h1>}
        </header>
    )
}

export default Home
