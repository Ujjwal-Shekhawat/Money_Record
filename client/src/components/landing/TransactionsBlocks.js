import React, { useContext, useEffect, Fragment } from 'react';
import TransactionContext from '../../context/transactions/transactionContext';

function TransactionsBlocks(props) {
    const context = useContext(TransactionContext);

    const { transactions, getTransactions } = context;

    useEffect(() => {
        getTransactions();
    }, [props.value]);

    const Design = (t) => {
    return (
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
                    <tr>
                      <th scope="row">{t.Date}</th>
                      <td>{t.lasttransaction}</td>
                      <td>Otto</td>
                    </tr>
                  </tbody>
                </table>
            </div>
        )
    }

    return (
        <div>
            {transactions.map(transaction => Design(transaction))} {/* (<div className=''><p className='col-sm-3'> {props.value.name}</p><p className='col-sm-9'>{transaction.lasttransaction}</p><br /></div>)) */}
        </div>
    )
}

export default TransactionsBlocks
