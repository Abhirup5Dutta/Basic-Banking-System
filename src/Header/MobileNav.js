import React, { useState } from 'react'
import RightNav from './RightNav'
import './Header.css';
import { TiThMenu } from 'react-icons/ti';
import { CgClose } from 'react-icons/cg';

const MobileNav = () => {

    const [open, setOpen] = useState(false);

    const hamburgerIcon = <TiThMenu className='hamburger' size='40px' color='white' onClick={() => setOpen(!open)} />

    const closeIcon = <CgClose className='hamburger' size='40px' color='white' onClick={() => setOpen(!open)} />

    const closeMobileMenu = () => setOpen(false);

    return (
        <div className='mobile-nav'>
            {open ? closeIcon : hamburgerIcon}
            {open && <RightNav isMobile={true} closeMobileMenu={closeMobileMenu} />}
        </div>
    )
}

export default MobileNav
