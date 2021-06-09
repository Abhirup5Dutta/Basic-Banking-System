import React, { useState } from 'react'
import './CreateUser.css'
import { db } from '../firebase'

function CreateUser() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  var [balance, setBalance] = useState('');

  const [loader, setLoader] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    setLoader(true);

    if (balance === '') {
      balance = 0;
    }

    if (name === '' || email === '' || contact === '') {
      alert('Sorry account no created!! Required fields need to be entered.');
      setLoader(false);
    } else {
      db.collection('users').add({
        name: name,
        email: email,
        contact: contact,
        balance: balance
      })
        .then(() => {
          alert('Congratulations! Your account is succesfully created.');
          setLoader(false);
        })
        .catch((error) => {
          alert(error.message);
          setLoader(false);
        });

      setName('');
      setEmail('');
      setContact('');
      setBalance('');
    }
  }

  return (
    <div className='create'>
      <form className='form-style' onSubmit={submitForm} >
        <h1 className='heading'>Create User Account</h1>

        <label className='label-font'>Name*</label>
        <input className="form-input" type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
        <label className='label-font'>Email id*</label>
        <input className="form-input" type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email id" />
        <label className='label-font'>Contact number*</label>
        <input className="form-input" type="number" name="phone" id="phone" value={contact} onChange={(e) => setContact(e.target.value)} placeholder="Enter your number" />
        <label className='label-font'>Balance(₹)</label>
        <input className="form-input" type="number" name="balance" id="balance" value={balance} onChange={(e) => setBalance(e.target.value)} placeholder="Enter the balance" />
        <button className="btn" type='submit' style={{ background: loader ? "#ccc" : "#2785c4" }} >Submit</button>
      </form>
    </div>
  )
}

export default (CreateUser)
