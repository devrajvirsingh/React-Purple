import React from 'react'
import './navbar.css'
import Navbar1 from './Navbar1'
const Navbar = () => {
    return (
        <>
            <div className="nav-bar">
                <div className="navbar">
                    <div className="search-div">
                        <input type="text" placeholder='What are you looking for ?' />
                        <i class="fa-solid fa-magnifying-glass search-logo"></i>
                    </div>
                    <div className="nav-images">
                        <img src="https://media6.ppl-media.com/static/purplle/img/purplle-logo-1.svg" alt="" className="logo-img" />
                        <img src="https://media6.ppl-media.com/mediafiles/ecomm/promo/1537798844_try-logo-3x.png" alt="" className='logo-img2' />
                    </div>
                    <div className="navbar-heart">
                        <i class="fa-regular fa-heart fa-2xl nav-svg" style={{color: "#0f0f10"}}></i>
                        <i class="fa-regular fa-face-smile fa-2xl nav-svg" style={{color: "#0f0f10"}}></i>
                        <i class="fa-solid fa-basket-shopping fa-2xl nav-svg" style={{color: "#0f0f10"}} ></i>
                    </div>
                </div>
            </div>
            <Navbar1/>
        </>
    )
}

export default Navbar