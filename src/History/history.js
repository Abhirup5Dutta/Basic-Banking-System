import React, { useState, useEffect } from 'react'
import './history.css';
import { db } from '../firebase'
import Transactiontable from '../TransactionTable'

function History() {
    const [transactions, setTransactions] = useState([]);
    useEffect(() => {
        db.collection('transactions').onSnapshot(snapshot => {
            setTransactions(snapshot.docs.map(doc => doc.data()))
        })
    }, [])
    return (
        <div className='transactions'>
            <h1 className='head'>Transaction History</h1>
            <div className="tran-table">
                <Transactiontable data={transactions} />
            </div>
        </div>
    )
}

export default History
