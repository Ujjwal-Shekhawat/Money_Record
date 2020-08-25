//Reducer function
export default (state, action) => {
    switch(action.type) {
        case 'post_transactions':
        case 'get_transactions':
            return {...state, transactions: action.payload, loading: false};
        default:
            return state;
    }
}