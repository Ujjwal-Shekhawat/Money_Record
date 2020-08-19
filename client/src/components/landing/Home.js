import React, { useContext, useEffect } from 'react';
//import AuthContext from '../../context/auth/authContext';
import AuthContext from '../../context/auth/authContext';
import { Redirect } from 'react-router-dom';
import Transactions from './Transactions';

const Home = () => {
    const authContext = useContext(AuthContext);
    
    const { user, isAuthenticated } = authContext;

    useEffect(async () => {
        await authContext.loadUser();
    }, [isAuthenticated]);

    return (
        <div>
            { (isAuthenticated) ? <Transactions value={user}/> : <Redirect to="/auth/login" /> }
        </div>
    )
}

export default Home
