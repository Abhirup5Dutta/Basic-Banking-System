import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';

const RightNav = (props) => {
    return (
        <ul className='nav-list '>
            <li>
                <Link to="/" className='link' onClick={() => props.isMobile && props.closeMobileMenu()} >
                    <h5>Home</h5>
                </Link>
            </li>
            <li>
                <Link to="/about" className='link' onClick={() => props.isMobile && props.closeMobileMenu()}>
                    <h5>About</h5>
                </Link>
            </li>
            <li>
                <Link to="/services" className='link' onClick={() => props.isMobile && props.closeMobileMenu()}>
                    <h5>Services</h5>
                </Link>
            </li>
            <li>
                <Link to="/contact" className='link' onClick={() => props.isMobile && props.closeMobileMenu()}>
                    <h5>Contact Us</h5>
                </Link>
            </li>
        </ul>
    )
}

export default RightNav
