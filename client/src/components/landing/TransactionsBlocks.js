import React, { useContext, useEffect, useState, Fragment } from 'react';
import TransactionContext from '../../context/transactions/transactionContext';
import TransactionsList from './TransactionsList';
import Axios from 'axios';

function TransactionsBlocks(props) {
    
    const context = useContext(TransactionContext);
    
    const [recentTransaction, setRecentTransaction] = useState({
        newTransaction: null,
        comment: ''
    });
    
    const forceUpdate = React.useCallback(() => setRecentTransaction({...recentTransaction}), []);
    
    const { comment, newTransaction } = recentTransaction;

    const { transactions, getTransactions, addTransaction, deleteTransaction } = context;

    const onChange = e => {
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
        if(sum < lasttransaction) {
            alert(`Sorry ${props.value.name} you dont have enough balance to process this transaction`);
            return;
        }
        addTransaction({lasttransaction, comment});
        //alert(`Feautre coming soon please wait`);
    }

    useEffect(() => { 
        getTransactions();
        //upd();
    }, [props.value]);

    const Design = (t, i) => {
    return (
        <tr key={i}>
            <th scope="row" className='itr'>{t.Date}</th>
            <td className='itr'>{t.lasttransaction}</td>
            <td className='itr'>{t.comment}</td>
            <td className='itr'>Otto</td>
        </tr>
        )
    };

    function convert(str) {
        var date = new Date(str),
        mnth = ("0" + (date.getMonth() + 1)).slice(-2),
        day = ("0" + date.getDate()).slice(-2);
        return [ day, mnth, date.getFullYear(),].join("-");
        //return [date.getFullYear(), mnth, day].join("-");
    };

    const betterDesign = (transaction, i) => { //later shift this to another component
        let dateData = new Date(String(transaction.Date));
        //console.clear();
        console.log(dateData);
        let parsedDate = convert(dateData);

        return (
            <div className='container box'>
            <div className='row justify-content-center'>
                <h5 className='yellow col-sm-12'>Date : {parsedDate}</h5>
            </div>
            <div className='row'>
                <p className='whitePink col-sm-12'>Comment : {transaction.comment}</p>
                <p className='whitePink col-sm-12'>Amount spent : {transaction.lasttransaction}</p>
            </div>
            <div className='row'>
                <button type="button" className="btn btn-danger col-6">Delete</button>
                <button type="button" className="btn btn-info col-6">Update</button>
            </div>
            </div>
        )
    };

    const clearUserTransactions = async () => {
        await transactions.filter((transaction) => deleteTransaction(transaction._id));
    }

    // Recalculate and assign thi section of code later
    const allRecentTransactions = (transactions.map(transaction => {return transaction.lasttransaction}));
    console.clear();
    console.log(allRecentTransactions);
    const sum = allRecentTransactions.reduce((a, b) => {return a+b});
    console.log(sum);
    // I will impliment it later (To actually save the remeaning balance to data base and not just do math and display it :))
    const remBalance = transactions[transactions.length-1].remeaningbalance - sum;
    /* const id = transactions[transactions.length-1]._id;
    const upd = async () => {
        try {
            await Axios.put(`http://localhost:5000/api/transactions/${id}/${remBalance}`);
        } catch(error) {
            
        }
    } */

    return (
        <div className='container'>
            <div className='row'>
                <div className='container'>
                    <div className='row row-content justify-content-center'>
                        <form className="form-inline" onSubmit={onSubmit}>
                            {/* <div class="form-group mb-2">
                                <label for="staticEmail2" class="sr-only">Email</label>
                                <input type="text" class="form-control-plaintext" id="staticEmail2" name='comment' value={comment} onChange={onChange} />
                            </div> */}
                            <div className="form-group mx-sm-3 mb-2">
                                <label for="inputPassword2" class="sr-only">New Transaction</label>
                                <input type="text" name='comment' value={ comment } onChange={onChange} class="form-control" id="inputPassword2" placeholder="Comments" />
                            </div>
                            <div className="form-group mx-sm-3 mb-2">
                                <label for="inputPassword2" class="sr-only">New Transaction</label>
                                <input type="number" name='newTransaction' value={ newTransaction   } onChange={onChange} class="form-control" id="inputPassword2" placeholder="Recent amount spend" />
                            </div>
                            <button type="submit" class="btn btn-danger btn-block mb-2">UPDATE</button>
                        </form>
                    </div>
                </div>
                {/* <table class="table table-hover">
                <thead>
                    <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Comment</th>
                    <th scope="col">Remaning Blanace</th>
                    </tr>
                </thead>
                <tbody> */}
                    {/* <tr> */}
                    <div className='container justify-content-center'>
                    <h4 className='h4center col'>Current Balance : {transactions[transactions.length-1].remeaningbalance - sum}</h4><button type="button" class="btn btn-outline-danger btn-sm float-right" onClick={clearUserTransactions}>Clear Account</button>
                    </div>
                        {/* {transactions.map((transaction, index) => Design(transaction, index))} */}
                        {/* {transactions.map((transaction, index) => betterDesign(transaction, index))} */}
                        {transactions.map((transaction, index) => <TransactionsList transaction={transaction} index={index} delFunction={deleteTransaction} forceUpdate={forceUpdate} />)}
                    {/* </tr> */}
                {/* </tbody>
                </table> */}
            </div>
            
            {/* (<div className=''><p className='col-sm-3'> {props.value.name}</p><p className='col-sm-9'>{transaction.lasttransaction}</p><br /></div>)) */}
        </div>
    )
}

export default TransactionsBlocks
