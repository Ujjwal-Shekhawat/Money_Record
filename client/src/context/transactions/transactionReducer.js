//Reducer function
export default (state, action) => {
    switch(action.type) {
        case 'post_transactions':
        case 'update_transaction':
            return {
                ...state,
                transactions: state.transactions.filter(
                    (transaction) => transaction._id /* !== action.payload //It will remove the target and re render it which is not pleaseing to user alo it was a mistake form my sdie*/
                ),
                loading: false 
            };
        case 'get_transactions':
            return {...state, transactions: action.payload, loading: false};
        case 'transaction_deleted':
            return {
                ...state,
                transactions: state.transactions.filter(
                    (transaction) => transaction._id !== action.payload
                ),
                loading: false
            };
        default:
            return state;
    }
}