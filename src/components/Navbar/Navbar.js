import React from "react";
import "../Navbar/Navbar.css";
import facebook from "../../assets/social/facebook.png";
import linkedin from "../../assets/social/linkedin.png";
import twitter from "../../assets/social/twitter.png";
import mail from "../../assets/social/mail.png";

const Navbar = () => {
    return(
        <div className="header">
            <div className="header-top-nav">
                <div className="content">
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
        </div>
    )
}

export default Navbar;