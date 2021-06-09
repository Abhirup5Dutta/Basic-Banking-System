import React from 'react'
import './services.css';
import { Link } from 'react-router-dom';

function Services() {
    return (
        <body className='body-style'>
            <div className='services'>
                <h1>Services Provided:</h1>
                <ul>
                    <li>
                        <Link to="/create" className='text-styling'>
                            Create User
                        </Link>
                    </li>
                    <li>
                        <Link to="/transfer" className='text-styling'>
                            Make a Transaction
                        </Link>
                    </li>
                    <li>
                        <Link to="/view" className='text-styling'>
                            View Customers
                        </Link>
                    </li>
                    <li>
                        <Link to="/history" className='text-styling'>
                            Transaction History
                        </Link>
                    </li>
                </ul>
            </div>
        </body>
    )
}

export default Services
