import React from "react";
import "../Container/PrimaryContainer.css";
import arrowLeft from "../../assets/container/arrow-left.png";
import arrowRight from "../../assets/container/arrow-right.png";

const PrimaryContainer = () => {
    return(
        <>
            <div className="section-one">
                <div className="section-one-banner-left">
                    <div className="section-one-banner-left-content">
                        <div className="order-btn">
                            <span>Order Now</span>
                        </div>
                        <div className="text-display">
                            <p className="text1">Asus</p>
                            <p className="text2">Super Sale</p>
                            <p className="text3">Laptop Gaming</p>
                        </div>
                    </div>
                </div>
                <div className="section-one-banner-top">
                    <div className="btn-slider">
                        <div>
                            <img src={arrowLeft} alt="right" className="arrow-left"/>
                        </div>
                        <div>
                            <img src={arrowRight} alt="left" className="arrow-right"/>
                        </div>
                    </div>
                    <div className="paginate-dot">
                        <div className="dot1"></div>
                        <div className="dot2"></div>
                        <div className="dot3"></div>
                        <div className="dot4"></div>
                        <div className="dot5"></div>
                    </div>
                    <div className="banner-content">
                        <div className="content">
                            <p className="p1">New Product</p>
                            <p className="p2">HAND WATCH </p>
                            <p className="p3">ROSSINI</p>
                        </div>
                        <div className="btn">
                            <span>Buy Now</span>
                        </div>
                    </div>
                </div>
                <div className="section-one-banner-bottom1">
                    <div className="bottom-banner-content">
                        <p>Wine</p>
                        <div>
                            <span>Drunkenness</span>
                            <span>Deep Flavor</span>
                        </div>
                    </div>
                </div>
                <div className="section-one-banner-bottom2">
                    <div className="bottom-banner-content">
                        <p>Cosmetic</p>
                        <div>
                            <span>MAXIMI</span>
                            <span>Sale 50%</span>
                        </div>
                    </div>
                </div>
                <div className="section-one-banner-bottom3">
                    <div className="bottom-banner-content">
                        <p>Sunglasses</p>
                        <div>
                            <span>Authentic</span>
                            <span>Sale off 50% </span>
                        </div>
                    </div>
                </div>
                <div className="section-one-banner-top-right">
                    <div className="banner-right-content">
                        <p>Big Deal</p>
                        <div style={{marginTop:'-5px'}}>
                            <span>Black Friday</span>
                            <span>Buy 1 Get 1</span>
                        </div>
                    </div>
                </div>
                <div className="section-one-banner-middle-right">
                    <div className="banner-right-content">
                        <p>Fujiwa</p>
                        <div style={{marginTop:'-10px'}}>
                            <span>ION Alkaline</span>
                            <span>Micronutrient</span>
                            <span>Supplements</span>
                        </div>
                    </div>
                </div>
                <div className="section-one-banner-bottom-right1">
                    <div className="bottom-banner-content">
                        <p>Hand Wash</p>
                        <div>
                            <span>Clean hands</span>
                            <span>Clean bacteria</span>
                        </div>
                    </div>
                </div>
                <div className="section-one-banner-bottom-right2">
                    <div className="bottom-banner-content">
                        <p>Fashion</p>
                        <div>
                            <span>Nice bag</span>
                            <span>Nice style</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PrimaryContainer;