import React, { useContext, useEffect } from 'react';
import TransactionContext from '../../context/transactions/transactionContext';

const Transactions = (props) => {
    const context = useContext(TransactionContext);

    const { transactions, getTransactions } = context;

    useEffect(() => {
        getTransactions();
    }, []);
    return (
        <div>
            <ul>
            {(props.value !== null && transactions !== null) ? transactions.map(transaction => (<li>transaction</li>)) : null}
            </ul>
        </div>
    )
}

export default Transactions
