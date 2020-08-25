import React, { useState, useContext, useEffect } from 'react';
import TransactionContext from '../../context/transactions/transactionContext';

function InitTransactions(props) {
    const context = useContext(TransactionContext);

    const [newBalance, setNewBalance] = useState({
        initBalance: null,
        comment: 'Init account',
    });

    const {initBalance, comment} = newBalance;

    const { transactions, getTransactions, addTransaction } = context;

    const onChange = e => {
        setNewBalance( {...newBalance, [e.target.name]: e.target.value} );
        //console.log(initBalance);
    }

    const onSubmit = e => {
        e.preventDefault();
        let remeaningbalance = Number(initBalance);
        let lasttransaction = 0;
        if(initBalance === null || initBalance <= 0) {
            alert(`${props.value.name} please enter a non zero positive value`);
            return;
        }
        addTransaction({ remeaningbalance, lasttransaction, comment });
        //alert(`Feautre coming soon please wait`);
    }

    useEffect(() =>{
        console.log(`Mounted`);
    }, []);

    return (
        <div>
            <div className='center'>
                <h3>Sorry seems there is no balance specified please specify your balance below</h3>
            </div>
            <br />
            <br />
            <hr />
            <div className='container'>
                <div className='row row-content justify-content-center'>
                    <form className="form-inline" onSubmit={onSubmit}>
                        {/* <div class="form-group mx-sm-3 mb-2">
                            <label for="inputPassword2" class="sr-only">New Transaction</label>
                            <input type="number" name='initBalance' value={initBalance} onChange={onChange} class="form-control" id="inputPassword2" placeholder="Current Balance" />
                        </div> */}
                        <div className="form-group mx-sm-3 mb-2">
                            <label for="inputPassword2" class="sr-only">New Transaction</label>
                            <input type="number" name='initBalance' value={initBalance} onChange={onChange} class="form-control" id="inputPassword2" placeholder="Recent amount spend" />
                        </div>
                        <button type="submit" class="btn btn-danger btn-block mb-2">UPDATE</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default InitTransactions
