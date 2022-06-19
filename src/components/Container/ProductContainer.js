import React from "react";
import "./ProductContainer.css";
import leftArrow from "../../assets/container/arrow-left.png";
import rightArrow from "../../assets/container/arrow-right.png";
import {Row,Col} from "react-bootstrap";

const ProductContainer = () => {
    return(
        <>
            <div className="section-four">
                <p className="heading">Promo Product</p>
                <div className="small-btn">
                    <span>See All</span>
                </div>
                <div className="slider-btn">
                    <img src={leftArrow} alt="leftArrow"/>
                    <img src={rightArrow} alt="rightArrow"/>
                </div>
                <Row>
                    <Col>
                        <div className="product-card">
                            <p>1st Card</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="product-card">
                            <p>2nd Card</p>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default ProductContainer;