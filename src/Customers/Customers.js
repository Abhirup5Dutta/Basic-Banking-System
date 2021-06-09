import React, { useState, useEffect } from 'react'
import './Customers.css';
import { db } from '../firebase'
import Datatable from '../datatable'

function Customers() {
    const [customers, setCustomers] = useState([]);
    useEffect(() => {
        db.collection('users').onSnapshot(snapshot => {
            setCustomers(snapshot.docs.map(doc => doc.data()))
        })
    }, [])
    return (
        <div className='customers'>
            <h1 className='head-cust'>Customers</h1>
            {/* {
                customers.map((customer) => (
                    <div>
                        <h4>{customer.name}</h4>
                        <h4>{customer.email}</h4>
                        <h4>{customer.contact}</h4>
                        <h4>{customer.balance}</h4>
                    </div>
                )
                )
            } */}
            <div className="customer-table">
                <Datatable data={customers} />

            </div>
        </div>
    )
}

export default Customers
