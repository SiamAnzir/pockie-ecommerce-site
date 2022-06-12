import React, {useEffect,useState} from "react";
import './App.css';
import {fetchAllProductsData} from "../src/api/index"
import Navbar from "./components/Navbar/Navbar";
import SectionOneContainer from "./components/Container/SectionOneContainer";
import SectionTwoContainer from "./components/Container/SectionTwoContainer";

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
            <SectionOneContainer/>
            <SectionTwoContainer/>
        </section>
    );
}

export default App;
