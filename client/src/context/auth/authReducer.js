//Reducer function
export default (state, action) => {
    switch(action.type) {
        case 'reg_success':
        case 'login_success': // I still have to implement the login auth (status: done)
            localStorage.setItem('token', action.payload.token);
            return ({
                ...state,
                ...action.payload,
                isAuthenticated: true,
                loading: false
            });
        case 'user_loaded':
            return ({
                ...state,
                isAuthenticated: true,
                loading: false,
                user: action.payload
            });
        case 'logout':
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                user: null,
                loading: false
            }
        case 'auth_error':
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
                user: null
            }
        default:
            return state;
    }
}