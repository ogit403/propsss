import React from "react";
import Header from "./header";
import Carousel from "./carousel";
import ListPhones from "./list-phones";
import ListLaptops from "./list-laptops";
import Footer from "./footer";

export default function Homework(){
    return (
        <div>
            <Header/>
            <Carousel/>
            <ListPhones/>
            <ListLaptops/>
            <Footer/>
        </div>
    )
}