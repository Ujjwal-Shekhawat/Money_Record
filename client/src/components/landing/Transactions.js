import React, { useContext, useEffect, Fragment, useState } from 'react';
import TransactionContext from '../../context/transactions/transactionContext';
import TransactionsBlocks from './TransactionsBlocks';
import InitTransactions from './InitTransactions';

const Transactions = (props) => {
    const context = useContext(TransactionContext);

    /* const [recentTransaction, setRecentTransaction] = useState({
        newTransaction: null,
        comment: ''
    });

    const {comment, newTransaction} = recentTransaction; */

    const { transactions, getTransactions, addTransaction } = context;

    useEffect(() => {
        getTransactions();
    }, [props.value]);

    /* const onChange = e => {
        setRecentTransaction( {...recentTransaction, [e.target.name]: e.target.value} );
        console.log(comment);
    }

    const onSubmit = e => {
        e.preventDefault();
        let lasttransaction = Number(newTransaction);
        if(newTransaction === null || newTransaction <= 0) {
            alert(`${props.value.name} please enter a non zero positive value`);
            return;
        }
        if(comment == '' || comment == undefined || comment == null) {
            setRecentTransaction( {...recentTransaction, comment: 'No Comment'} ); // Dosent seem to work 
        }
        addTransaction({lasttransaction, comment});
        //alert(`Feautre coming soon please wait`);
    } */

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
            {/* <div className='container'>
                <div className='row row-content justify-content-center'>
                    <form class="form-inline" onSubmit={onSubmit}>
                        {/* <div class="form-group mb-2">
                            <label for="staticEmail2" class="sr-only">Email</label>
                            <input type="text" class="form-control-plaintext" id="staticEmail2" name='comment' value={comment} onChange={onChange} />
                        </div>
                        <div class="form-group mx-sm-3 mb-2">
                            <label for="inputPassword2" class="sr-only">New Transaction</label>
                            <input type="text" name='comment' value={ comment } onChange={onChange} class="form-control" id="inputPassword2" placeholder="Comments" />
                        </div>
                        <div class="form-group mx-sm-3 mb-2">
                            <label for="inputPassword2" class="sr-only">New Transaction</label>
                            <input type="number" name='newTransaction' value={ newTransaction   } onChange={onChange} class="form-control" id="inputPassword2" placeholder="Recent amount spend" />
                        </div>
                        <button type="submit" class="btn btn-danger btn-block mb-2">UPDATE</button>
                    </form>
                </div>
            </div> */}
            <div className='container'>
                <div /* className='row row-content justify-content-center' */> 
                    {(props.value !== null && transactions !== undefined && transactions !== null && transactions != 0) ? <TransactionsBlocks value={props.value}/>/* Later pass transactions so delete and update can be implimented */ : (props.value !== null) ? <InitTransactions value={props.value} /> : null}
                </div>
            </div>
            <footer className='footer'>
                <div className=''>
                    <div className='row justify-content-center'>
                        <h4 className='col-sm-12'>Footer Section Under development</h4>
                    </div>
                </div>
            </footer>
        </Fragment>
    )
}

export default Transactions
