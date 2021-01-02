import React from "react";
import Header from "../baitap2/header";
import Carousel from "./carousel";
import Content from "./content";
import Footer from "./footer";
import Product from "./product";

export default function Baitap2() {
    return (
        <div>
            <Header/>
            <Carousel />
            <Content />
            <Product/>
            <Footer/>
        </div>  
    )
}