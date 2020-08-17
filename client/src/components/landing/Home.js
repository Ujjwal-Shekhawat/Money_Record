import React, { useContext, useEffect } from 'react';
//import AuthContext from '../../context/auth/authContext';
import AuthContext from '../../context/auth/authContext';

const Home = () => {
    const authContext = useContext(AuthContext);
    
    const { user } = authContext;
    
    useEffect(() => {
        authContext.loadUser();
    }, []);

    
    return (
        <div>
            { user }
        </div>
    )
}

export default Home
