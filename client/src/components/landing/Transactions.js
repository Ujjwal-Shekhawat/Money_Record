import React, { useContext, useEffect, Fragment } from 'react';
import TransactionContext from '../../context/transactions/transactionContext';

const Transactions = (props) => {
    const context = useContext(TransactionContext);

    const { transactions, getTransactions } = context;

    useEffect(() => {
        getTransactions();
    }, [props.value]);
    return (
        <Fragment>
        <div>
            <ul className='home-list'>
                <li>
                    {(props.value !== null && transactions !== null) ? transactions.map(transaction => (<li>{transaction.lasttransaction}</li>)) : (props.value !== null) ? <h1>No Transaction History for {props.value.name}</h1> : null}
                </li>
            </ul>
        </div>
        </Fragment>
    )
}

export default Transactions
