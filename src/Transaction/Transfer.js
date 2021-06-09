import React, { useState, useEffect } from 'react'
import './Transfer.css'
import { db } from '../firebase';
import Dropdown from '../dropdown';


function Transfer() {
    const [customers, setCustomers] = useState([]);
    useEffect(() => {
        db.collection('users').onSnapshot(snapshot => {
            setCustomers(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })))
        })
    }, [])

    const [value, setValue] = useState(null);
    const [value2, setValue2] = useState(null);
    const [loader, setLoader] = useState(false);

    var [balance, setBalance] = useState('');

    const submitForm = (e) => {
        e.preventDefault();
        setLoader(true);

        if (balance === '') {
            balance = 0;
        }

        if (value.balance < balance) {
            alert('Sorry! Insufficient amount to transfer money.');
            setLoader(false);
        } else if (value.name === value2.name) {
            alert('Alert!! Sender and Receiver cannot be the same.');
            setLoader(false);
        } else {
            var balance1 = value.balance - balance;
            var balance2 = parseInt(value2.balance) + parseInt(balance);
            customers.forEach((customer) => {
                if (customer.email === value.email) {
                    db.collection('users').doc(customer.id).update({ balance: balance1 });
                }
                if (customer.email === value2.email) {
                    db.collection('users').doc(customer.id).update({ balance: balance2 });
                }
            })

            var sender = value.name;
            var receiver = value2.name;

            db.collection('transactions').add({
                sender: sender,
                receiver: receiver,
                balance: balance,
                date: Date(Date.now()).toString()
            })
                .then(() => {
                    alert('Congratulations! The amount has been transferred successfully.');
                    setLoader(false);
                    setBalance('');
                })
                .catch((error) => {
                    alert(error.message);
                    setLoader(false);
                });
        }
    }

    return (
        <div className='transfer'>
            <div className="heading">
                <h1>Transfer Money</h1>
            </div>
            <hr />
            <form className="amt-transfer" onSubmit={submitForm} >
                <div className="container" >
                    <div className="sender" style={{ width: 200 }}>
                        <label>Select the Sender</label>
                        <Dropdown options={customers} id='email' label='name' name='Select Sender...' value={value} onChange={val => setValue(val)} />
                    </div>
                    <div className="receiver" style={{ width: 200 }}>
                        <label>Select the Receiver</label>
                        <Dropdown options={customers} id='email' label='name' name='Select Receiver...' value={value2} onChange={val => setValue2(val)} />
                    </div>
                </div>
                <div className="amt">
                    <input className="form-input" type="number" name="balance" id="balance" value={balance} onChange={(e) => setBalance(e.target.value)} placeholder="Enter amount" />
                    <button className="btn-sty" type='submit' style={{ background: loader ? "#ccc" : "#2785c4" }} >Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Transfer
