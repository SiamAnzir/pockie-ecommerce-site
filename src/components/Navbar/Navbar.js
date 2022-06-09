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
                </div>
            </div>
        </div>
    )
}

export default Navbar;