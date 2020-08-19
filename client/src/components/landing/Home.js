import React, { useContext, useEffect } from 'react';
//import AuthContext from '../../context/auth/authContext';
import AuthContext from '../../context/auth/authContext';
import { Redirect } from 'react-router-dom';
import Transactions from './Transactions';

const Home = () => {
    const authContext = useContext(AuthContext);
    
    const { user, isAuthenticated, loading } = authContext;

    useEffect(() => {
        authContext.loadUser();
    }, [    ]);

    return (
        <div>
            { (isAuthenticated && !loading) ? <Transactions value={user}/> : <Redirect to="/auth/login" /> }
        </div>
    )
}

export default Home
