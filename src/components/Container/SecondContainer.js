import React from "react";
import "./SecondContainer.css";
import arrowLeft from "../../assets/container/arrow-left.png";
import arrowRight from "../../assets/container/arrow-right.png";
import realEstate from "../../assets/container/real-estate.png";
import technology from "../../assets/container/technology.png";
import watch from "../../assets/container/watch.png";
import glasses from "../../assets/container/glasses.png";
import cosmetics from "../../assets/container/cosmetic.png";
import highGrade from "../../assets/container/_drink.png";

const SecondContainer = () =>{
    return(
        <>
            <div className="section-two">
                <div className="section-two-top">
                    <p>Shop By Categories</p>
                    <div className="top-btn">
                        <span>See All</span>
                    </div>
                    <div className="top-btn-slider">
                        <div>
                            <img src={arrowLeft} alt="right" className="btn-arrow-left"/>
                        </div>
                        <div>
                            <img src={arrowRight} alt="left" className="btn-arrow-right"/>
                        </div>
                    </div>
                </div>
                <div className="list-category">
                    <div className="list-components">
                        <div>
                            <img src={realEstate} alt="realEstate"/>
                            <p>Real Estate</p>
                        </div>
                    </div>
                    <div className="list-components" style={{left:'190px'}}>
                        <div>
                            <img src={technology} alt="technology"/>
                            <p>Technology</p>
                        </div>
                    </div>
                    <div className="list-components" style={{left:'380px'}}>
                        <div>
                            <img src={watch} alt="watch"/>
                            <p>Watch</p>
                        </div>
                    </div>
                    <div className="list-components" style={{left:'570px'}}>
                        <div>
                            <img src={glasses} alt="glasses"/>
                            <p>Glasses</p>
                        </div>
                    </div>
                    <div className="list-components" style={{left:'760px'}}>
                        <div>
                            <img src={cosmetics} alt="cosmetics"/>
                            <p>Cosmetics</p>
                        </div>
                    </div>
                    <div className="list-components" style={{left:'950px'}}>
                        <div>
                            <img src={highGrade} alt="highGrade"/>
                            <p>Food High Grade</p>
                        </div>
                    </div>
                </div>
                <div className="list-product">
                    <div className="products">
                        <img alt="product"/>
                        <div className="product-info">
                            <div>
                                <p className="title">Apple Macbook Pro 2019 MWP42SA/A</p>
                                <p className="price">$2,013.54</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-three">
                <div className="banner1">
                    <div className="section-three-content">
                        <p className="para1">Hot deal</p>
                        <p className="para2">TOURS SAFE</p>
                        <p className="para3">TRUE DISCOUNT</p>
                    </div>
                    <div className="section-three-btn">
                        <span>Order Now</span>
                    </div>
                </div>
                <div className="banner1" style={{marginLeft:"585px"}}>
                    <div className="section-three-content">
                        <p className="para1">New Product</p>
                        <p className="para2">EXPERIENCE TECHNOLOGY</p>
                        <p className="para3">RELAX HIGHLY</p>
                    </div>
                    <div className="section-three-btn">
                        <span>Order Now</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SecondContainer;