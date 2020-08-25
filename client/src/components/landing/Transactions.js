import React, { useContext, useEffect, Fragment, useState } from 'react';
import TransactionContext from '../../context/transactions/transactionContext';
import TransactionsBlocks from './TransactionsBlocks';

const Transactions = (props) => {
    const [recentTransaction, setRecentTransaction] = useState({
        newTransaction: 0,
    });

    const context = useContext(TransactionContext);

    const { transactions, getTransactions } = context;

    useEffect(() => {
        getTransactions();
    }, [props.value]);

    const onChange = e => {
        setRecentTransaction( {...recentTransaction, [e.target.name]: e.target.value} );
    }

    const onSubmit = e => {
        e.preventDefault();
        alert(`Featire coming soon please wait`);
    }

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
                <div className='row row-content justify-content-center '>
                    <form class="form-inline" onSubmit={onSubmit}>
                        {/* <div class="form-group mb-2">
                            <label for="staticEmail2" class="sr-only">Email</label>
                            <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value="email@example.com" />
                        </div> */}
                        <div class="form-group mx-sm-3 mb-2">
                            <label for="inputPassword2" class="sr-only">New Transaction</label>
                            <input type="number" name='newTransaction' value={newTransaction} onChange={onChange} class="form-control" id="inputPassword2" placeholder="Recent amount spend" />
                        </div>
                        <br />
                        <button type="submit" class="btn btn-primary mb-2">Confirm identity</button>
                    </form>
                </div>
            </div>
            <div className='container'>
                <ul className='row row-content justify-content-center'> 
                {(props.value !== null && transactions.length !== 0) ? <TransactionsBlocks value={props.value}/> : (props.value !== null) ? <h1>No Transaction History for {props.value.name}</h1> : null}
                </ul>
            </div>
            <footer className='footer'>
                <div className='container'>
                    <div className='row row-content justify-content-center align-content-center'>
                        <h1>Footer Section Under development</h1>
                    </div>
                </div>
            </footer>
        </Fragment>
    )
}

export default Transactions
