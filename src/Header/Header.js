import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';
import Nav from './Nav';
import MobileNav from './MobileNav';

function Header() {
    // const burger = document.querySelector(".burger");
    // const navbar = document.querySelector(".navbar");
    // const navList = document.querySelector(".nav-list");

    return (
        <nav className="navbar background-head h-nav-resp">

            <Link to="/" className='bank-name'>
                <div className='logo'>
                    <img src="https://www.thesparksfoundationsingapore.org/images/logo_small.png" alt="TSF bank image" />
                </div>
                <h2 className='title'>TSF Bank</h2>
            </Link>
            <Nav />
            <MobileNav />
        </nav>
    )
}

export default Header
