import React, { useReducer } from 'react';
import TransactionContext from './transactionContext';
//import TransactionReducer from './transactionReducer';
import axios from 'axios';
import transactionReducer from './transactionReducer';
import TranssactionContext from './transactionContext';

const TransactionState = (props) => {
    const initState = {
        transactions: []
    };

    const [state, dispach] = useReducer(transactionReducer, initState);

    //get transactions
    const getTransactions = async () => {
        try {
        const result = await axios.get('http://localhost:5000/api/transactions');
        console.log(result.data);
        dispach({ type: 'get_transactions', payload: result.data });
        } catch(error) {
            alert(`Error : ${error.message}`);
        }
    }

    return (
        <TranssactionContext.Provider
            value={{
                transactions: state.transactions,
                getTransactions
            }}>
            {props.children}
        </TranssactionContext.Provider>
    );
};

export default TransactionState
