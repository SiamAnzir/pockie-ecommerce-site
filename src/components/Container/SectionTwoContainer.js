import React from "react";
import "./SectionTwoContainer.css";
import arrowLeft from "../../assets/container/arrow-left.png";
import arrowRight from "../../assets/container/arrow-right.png";

const SectionTwoContainer = () =>{
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
                    <div></div>
                </div>
            </div>
        </>
    )
}

export default SectionTwoContainer;