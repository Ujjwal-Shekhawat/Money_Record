import React, { useReducer } from 'react';
import TransactionContext from './transactionContext';
//import TransactionReducer from './transactionReducer';
import axios from 'axios';
import transactionReducer from './transactionReducer';
import TranssactionContext from './transactionContext';

const TransactionState = (props) => {
    const initState = {
        transactions: null
    };

    const [state, dispach] = useReducer(transactionReducer, initState);
    
    //get transactions
    const getTransactions = async () => {
        try {
        const result = await axios.get('/api/transactions');
        console.log(result.data);
        dispach({ type: 'get_transactions', payload: result.data });
        } catch(error) {
            alert(`Error : ${error.message}`);
        }
    }

    // Method to add transaction (Status : Working on it)
    const addTransaction = async (formData) => {
        try {
            console.clear();
            console.log(formData);
            const config = {
                headers: {
                    'content-type': 'application/json'
                }
            };
            const result = await axios.post('/api/transactions', formData, config);
            dispach({ type: 'post_transactions', playload: result.data });
            console.log(result.data);
            getTransactions();
        } catch(error) {
            console.log(error.message);
        }
    }

    const updateTransaction = async (formData) => {
        try {
            console.log(formData);
            const config = {
                headers : {
                    'content-type' : 'application/json'
                }
            }
            const result = await axios.put(`/api/transactions`, formData, config);
            dispach({ type: 'update_transaction', payload: formData.id });
            // alert(refresh);
            getTransactions();
        } catch(error) {
            console.log(error.message);
        }
    }

    const deleteTransaction = async (id) => {
        try {
            console.clear();
            console.log(id);
            await axios.delete(`/api/transactions/${id}`);
            dispach({ type: 'transaction_deleted', playload: id });
            getTransactions();
        } catch(error) {
            console.log(error.message);
        }
    }

    return (
        <TranssactionContext.Provider
            value={{
                transactions: state.transactions,
                getTransactions,
                addTransaction,
                updateTransaction,
                deleteTransaction
            }}>
            {props.children}
        </TranssactionContext.Provider>
    );
};

export default TransactionState
