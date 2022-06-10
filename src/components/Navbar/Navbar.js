import React from "react";
import "../Navbar/Navbar.css";
import facebook from "../../assets/social/facebook.png";
import linkedin from "../../assets/social/linkedin.png";
import twitter from "../../assets/social/twitter.png";
import mail from "../../assets/social/mail.png";
import logo from "../../assets/logo/logo.png";
import cart from "../../assets/logo/cart.png";
import favourite from "../../assets/logo/favorite.png";
import arrow from "../../assets/logo/arrow-down.png";
import truck from "../../assets/logo/truck.png";
import user from "../../assets/logo/user.png";

const Navbar = () => {
    return(
        <div className="header">
            <div className="header-top-nav">
                <div className="header-top-nav-content">
                    <div className="social">
                        <li className="facebook"><img src={facebook} alt="facebook"/></li>
                        <li className="linkedin"><img src={linkedin} alt="linkedin"/></li>
                        <li className="twitter"><img src={twitter} alt="twitter"/></li>
                        <li className="mail"><img src={mail} alt="mail"/></li>
                    </div>
                    <div className="menu">
                        <div className="menu-item1">
                            <span className="introduce-btn">Introduce</span>
                        </div>
                        <p className="dot1">.</p>
                        <div className="menu-item2">
                            <span className="partner-incentives-btn">Partner Incentives</span>
                        </div>
                        <p className="dot2">.</p>
                        <div className="menu-item3">
                            <span className="promotion-btn">Promotion</span>
                        </div>
                        <p className="dot3">.</p>
                        <div className="menu-item4">
                            <span className="contact-btn">Contact</span>
                        </div>
                        <p className="dot4">.</p>
                        <div className="menu-item5">
                            <span className="faq-btn">Frequently asked questions</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-nav1">
                <div className="header-nav1-content">
                    <div className="logo"><img src={logo} alt="logo"/></div>
                    <div className="search-bar">
                        <div className="search-filter">
                            <input className="search-input" type="text" placeholder="  What are you looking for?"/>
                            <div className="dropdown">
                                <text>Category</text>
                                <div className="arrow-down">
                                    <img src={arrow} alt="arrow"/>
                                </div>
                            </div>
                        </div>
                        <div className="search-btn"><p>Search</p></div>
                    </div>
                    <div className="cart-logo">
                        <div className="badge">
                            <span>3</span>
                        </div>
                        <div className="cart"><img src={cart} alt="cart"/></div>
                    </div>
                    <div className="favourite"><img src={favourite} alt="favourite"/></div>
                </div>
            </div>
            <div className="header-nav2">
                <div className="header-nav2-content">
                    <div className="sub-menu">
                        <div className="sub-menu-item1">
                            <div className="sub-menu-item1-content">
                                <img src={truck} alt="truck"/>
                                <span>Track Your Order</span>
                            </div>
                        </div>
                        <div className="sub-menu-item2">
                            <div className="sub-menu-item2-content">
                                <img src={user} alt="user"/>
                                <span>Sign In/Register</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;