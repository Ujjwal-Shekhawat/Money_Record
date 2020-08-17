//Reducer function
export default (state, action) => {
    switch(action.type) {
        case 'reg_success':
        case 'login_success': // I still have to implement the login auth
            localStorage.setItem('token', action.payload.token);
            return ({
                ...state,
                ...action.payload,
                isAuthenticated: true,
                loading: false
            });
    }
}