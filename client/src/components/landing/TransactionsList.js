import React, { useEffect } from 'react';

function convert(str) {
    var date = new Date(str),
    mnth = ("0" + (date.getMonth() + 1)).slice(-2),
    day = ("0" + date.getDate()).slice(-2);
    return [ day, mnth, date.getFullYear(),].join("-");
    //return [date.getFullYear(), mnth, day].join("-");
}

function TransactionsList({transaction, index, delFunction, forceUpdate}) {
    let dateData = new Date(String(transaction.Date));
    //console.clear();
    console.log(dateData);
    let parsedDate = convert(dateData);

    const id = transaction._id;

    const deleteTransaction = e => {
        delFunction(e);
        forceUpdate();
    }

    useEffect(() => {

    }, [])

    return (
        <div className='container box'>
            <div className='row justify-content-center'>
                <h5 className='yellow col-sm-12'>Date : {parsedDate}</h5>
            </div>
            <div className='row'>
                <p className='whitePink col-sm-12'>Comment : {transaction.comment}</p>
                <p className='whitePink col-sm-12'>Amount spent : {transaction.lasttransaction}</p>
            </div>
            { (transaction.comment != 'Init account') ? 
            (<div className='row'>
                <button type="button" className="btn btn-danger col-6" onClick={() => deleteTransaction(id)}>Delete</button>
                <button type="button" className="btn btn-info col-6">Update</button>
            </div>)
            :
            <p>Protected Division</p>}
        </div>
    )
}

export default TransactionsList
