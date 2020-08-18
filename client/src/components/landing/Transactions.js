import React, { useContext, useEffect, Fragment } from 'react';
import TransactionContext from '../../context/transactions/transactionContext';

const Transactions = (props) => {
    const context = useContext(TransactionContext);

    const { transactions, getTransactions } = context;

    useEffect(() => {
        getTransactions();
    }, []);
    return (
        <Fragment>
        <div>
            <ul>
            {(props.value !== null && transactions !== null) ? transactions.map(transaction => (<li>{transaction.lasttransaction}</li>)) : null}
            </ul>
        </div>
        </Fragment>
    )
}

export default Transactions
