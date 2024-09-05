import React from 'react'
import './Header.css'
import logo from '../../assets/logo.png'
const Header = () => {
    return (
        <div className='nav'>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="nav-list">
                <ul>
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">Our Services</a>
                    </li>
                    <li>
                        <a href="">Our Traders</a>
                    </li>
                    <li>
                        <a href="">Samples</a>
                    </li>
                    <li>
                        <a href="">Portfolio</a>
                    </li>
                    <li>
                        <a href="">Abous Us</a>
                    </li>
                    <li>
                        <a href="">Pricing Plans</a>
                    </li>
                    <li>
                        <a href="">Contact Us</a>
                    </li>
                    <div className='btn'>
                        <button>
                            Get Estimate
                        </button>
                        <button>
                            Admin
                        </button>


                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Header
