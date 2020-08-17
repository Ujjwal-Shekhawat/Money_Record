import React, { useContext, useEffect } from 'react';
//import AuthContext from '../../context/auth/authContext';
import AuthContext from '../../context/auth/authContext';

const Home = () => {
    const authContext = useContext(AuthContext);
    
    const { user } = authContext;

    useEffect(async () => {
        await authContext.loadUser();
    }, []);

    return (
        <div>
            {(user !== null) ?
                user.name : null
            }
        </div>
    )
}

export default Home
