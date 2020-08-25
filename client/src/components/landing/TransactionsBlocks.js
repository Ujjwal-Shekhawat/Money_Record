import React, { useContext, useEffect, Fragment } from 'react';
import TransactionContext from '../../context/transactions/transactionContext';

function TransactionsBlocks(props) {
    const context = useContext(TransactionContext);

    const { transactions, getTransactions } = context;

    useEffect(() => {
        getTransactions();
    }, [props.value]);

    const Design = (t, i) => {
    return (
        <tr>
            <th scope="row" className='itr'>{Date(t.Date)}</th>
            <td className='itr'>{t.lasttransaction}</td>
            <td className='itr'>Otto</td>
        </tr>
        )
    }

    const betterDesign = () => {
        alert(`Thinking`);
        // I'm still thinkking what to do about this
    }

    return (
        <div>
            <div>
                <table class="table table-hover">
                <thead>
                    <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Remeaning Blanace</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <tr> */}
                        {transactions.map((transaction, index) => Design(transaction, index))}
                    {/* </tr> */}
                </tbody>
                </table>
            </div>
                
            {/* (<div className=''><p className='col-sm-3'> {props.value.name}</p><p className='col-sm-9'>{transaction.lasttransaction}</p><br /></div>)) */}
        </div>
    )
}

export default TransactionsBlocks
