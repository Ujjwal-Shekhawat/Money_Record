import React, { useEffect, useState, Fragment, useCallback } from 'react';

function convert(str) {
    var date = new Date(str),
    mnth = ("0" + (date.getMonth() + 1)).slice(-2),
    day = ("0" + date.getDate()).slice(-2);
    return [ day, mnth, date.getFullYear(),].join("-");
    //return [date.getFullYear(), mnth, day].join("-");
}

function TransactionsList({transaction, index, updFunction, delFunction, forceUpdate}) {
    let dateData = new Date(String(transaction.Date));
    const [update, setUpdate] = useState({
        correction: null,
        isEnabeled: false,
        rerender: false,
    });    //console.clear();
    console.log(dateData);
    let parsedDate = convert(dateData);

    const id = transaction._id;

    const { correction } = update;

    const enableUpdateForm = () => {
        setUpdate({ ...update ,isEnabeled: !update.isEnabeled });
        console.log(id, update.isEnabeled);
    }

    const onChange = e => {
        setUpdate( { ...update, [e.target.name]: e.target.value } );
    }

    const deleteTransaction = e => {
        let conformation = window.confirm(`Are you sure you want to remove this transaction`);
        if(conformation === true)
            delFunction(e);
        else 
            forceUpdate();
    }

    const refreshPage = () => {
        window.location.reload(false);
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        if(update.correction < 0) {
            alert(`Can not enter value less than 0`);
            return;
        }
        //let choice = window.confirm(`Are you sure you want to update this value of ${transaction.lasttransaction} to ${update.correction}`);
        if(true) {
            // Update Code here
            try {
                let lasttransaction = correction;
                updFunction(id, lasttransaction);
                refreshPage();
            } catch(error) {
                console.log(error.message);
            }
        }
    }

    useEffect(() => {
        console.log('Using Effect');
    }, []);

    const updateForm = (
        <Fragment>
            <form onSubmit={onSubmit}>
                <div class="form-group">
                    <label for="exampleInputEmail1">New value</label>
                    <input type="number" class="form-control" id="exampleInputEmail1" /* placeholder="" */ name='correction' value={correction} onChange={onChange} />
                </div>
                <button type="submit" class="btn btn-primary">Update</button>
            </form>
        </Fragment>
    );

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
            (<div className='row box'>
                <button type="button" className="btn btn-danger col-5" onClick={() => deleteTransaction(id)}>Delete</button>
                <button type="button" className="btn btn-info col-5 offset-2" onClick={enableUpdateForm}>{ (update.isEnabeled == false) ? <span>Update</span> : <span>Revert</span>}</button>
            </div>)
            :
            (<div className='row'>
                <h4 className='whitePink col-sm-12'>This element will be removed later ${transaction.remeaningbalance}</h4>
            </div>) }
            { (update.isEnabeled == true) ? updateForm : null }
        </div>
    )
}

export default TransactionsList
