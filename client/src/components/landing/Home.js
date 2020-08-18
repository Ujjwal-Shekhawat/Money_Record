import React, { useContext, useEffect } from 'react';
//import AuthContext from '../../context/auth/authContext';
import AuthContext from '../../context/auth/authContext';
import Transactions from './Transactions';

const Home = () => {
    const authContext = useContext(AuthContext);
    
    const { user } = authContext;

    useEffect(async () => {
        await authContext.loadUser();
    }, []);

    return (
        <div>
            <Transactions value={user}/>
        </div>
    )
}

export default Home
