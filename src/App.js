import React, {useEffect,useState} from "react";
import './App.css';
import {fetchAllProductsData} from "../src/api/index"
import Navbar from "./components/Navbar/Navbar";
import FirstContainer from "./components/Container/FirstContainer";
import SecondContainer from "./components/Container/SecondContainer";
import ProductContainer from "./components/Container/ProductContainer";

const App = () => {
    const [productData,setProductData] = useState({});
    useEffect(
        () => {
            const fetchResult = async () => {
                const result = await fetchAllProductsData();
                setProductData(result);
            };
            fetchResult().then(response => response);
        },[]
    );
    //console.log(productData.data);
    return (
        <section className="home-page">
            <Navbar/>
            <FirstContainer/>
            <SecondContainer/>
            <ProductContainer/>
        </section>
    );
}

export default App;
