import React, { useState, useContext } from 'react';
import TransactionContext from '../../context/transactions/transactionContext';

function InitTransactions(props) {
    const context = useContext(TransactionContext);

    const [newBalance, setNewBalance] = useState({
        initBalance: null,
        comment: 'Init account',
        defaultTransaction: 0
    })

    const {initBalance, defaultTransaction, comment} = newBalance;

    const { transactions, getTransactions, addTransaction } = context;

    const onChange = e => {
        setNewBalance( {...setNewBalance, [e.target.name]: e.target.value} );
        console.log(initBalance);
    }

    const onSubmit = e => {
        e.preventDefault();
        let remeaningbalance = Number(initBalance*10); // Temporary fix
        let lasttransaction = 0;
        if(initBalance === null || initBalance <= 0) {
            alert(`${props.value.name} please enter a non zero positive value`);
            return;
        }
        addTransaction({comment, remeaningbalance, lasttransaction});
        //alert(`Feautre coming soon please wait`);
    }

    return (
        <div>
            <h1>Sorry seems there is no balance specified please specify your balance below</h1>
            <br />
            <br />
            <hr />
            <div className='container'>
                <div className='row row-content justify-content-center'>
                    <form class="form-inline" onSubmit={onSubmit}>
                        {/* <div class="form-group mx-sm-3 mb-2">
                            <label for="inputPassword2" class="sr-only">New Transaction</label>
                            <input type="number" name='initBalance' value={initBalance} onChange={onChange} class="form-control" id="inputPassword2" placeholder="Current Balance" />
                        </div> */}
                        <div class="form-group mx-sm-3 mb-2">
                            <label for="inputPassword2" class="sr-only">New Transaction</label>
                            <input type="number" type="number" name='initBalance' value={initBalance} onChange={onChange} class="form-control" id="inputPassword2" placeholder="Recent amount spend" />
                        </div>
                        <button type="submit" class="btn btn-danger btn-block mb-2">UPDATE</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default InitTransactions
