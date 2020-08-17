import React, { useContext, useEffect } from 'react';
//import AuthContext from '../../context/auth/authContext';
import AuthContext from '../../context/auth/authContext';

const home = () => {
    const authContext = useContext(AuthContext);

    useEffect(() => {
        AuthContext.loadUser();
    }, []);

    const { user } = AuthContext;
    
    return (
        <div>
            { user }
        </div>
    )
}

export default home
