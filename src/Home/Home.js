import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className='home'>
            <div className="home-container">
                <img className='home-image' src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_158673029_9707279704500119_78594.jpg" alt="Bank Image" />
            </div>
            <div className="home-row">
                <div className="option">
                    <img src="https://nnhydro.com/wp-content/uploads/2019/04/head-659652__340.png" alt="Create User" />
                    <button className='btn-style'>
                        <Link to="/create" className='text-style'>
                            Create User
                        </Link>
                    </button>
                </div>
                <div className="option">
                    <img src="https://i.pinimg.com/originals/1f/8f/e5/1f8fe515009108b01c3484e520a0cb81.jpg" alt="Transfer money" />
                    <button className='btn-style'>
                        <Link to="/transfer" className='text-style'>
                            Make a Transaction
                        </Link>
                    </button>
                </div>
                <div className="option">
                    <img src="https://cdn2.iconfinder.com/data/icons/user-23/512/User_Customers.png" alt="View Customers" />
                    <button className='btn-style'>
                        <Link to="/view" className='text-style'>
                            View Customers
                        </Link>
                    </button>
                </div>
                <div className="option">
                    <img src="https://ak.picdn.net/shutterstock/videos/1022355958/thumb/12.jpg" alt="Transaction History" />
                    <button className='btn-style'>
                        <Link to="/history" className='text-style'>
                            Transaction History
                        </Link>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Home
