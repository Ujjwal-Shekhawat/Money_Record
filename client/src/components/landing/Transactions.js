import React, { useContext, useEffect, Fragment } from 'react';
import TransactionContext from '../../context/transactions/transactionContext';

const Transactions = (props) => {
    const context = useContext(TransactionContext);

    const { transactions, getTransactions } = context;

    useEffect(() => {
        getTransactions();
    }, [props.value]);
    return (
        <div>
            <br />
            <br />
            <br />
            <br />
            <br />
        <div className='container'>
            <ul className='avoid-collision'> 
                {(props.value !== null && transactions.length !== 0) ? transactions.map(transaction => (<div className='row'><p className='col-sm-3'> {props.value.name}</p><li>{transaction.lasttransaction}</li><br /></div>)) : (props.value !== null) ? <h1>No Transaction History for {props.value.name}</h1> : null}
            </ul>
        </div>
        </div>
    )
}

export default Transactions
