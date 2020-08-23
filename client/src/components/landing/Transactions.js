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
            <header class="jumbotron">
                <div class="container">
                    <div class="row row-header">
                        <div class="col-12 col-sm-6">
                        <h1>Welcome {(props.value !== null) ? props.value.name : <p>Loading</p>}</h1>
                    </div>
                    <div class="col-12 col-sm">
                    </div>
                    </div>
                </div>
            </header>
            <div className='container'>
                <ul className='row'> 
                    {(props.value !== null && transactions.length !== 0) ? transactions.map(transaction => (<div className=''><p className='col-sm-3'> {props.value.name}</p><p className='col-sm-9'>{transaction.lasttransaction}</p><br /></div>)) : (props.value !== null) ? <h1>No Transaction History for {props.value.name}</h1> : null}
                </ul>
            </div>
        </Fragment>
    )
}

export default Transactions
