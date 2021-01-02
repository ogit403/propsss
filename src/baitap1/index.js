import React, { Component } from "react";
import Header from "./header";
import Content from "./content";
import Sidebar from "./sidebar";
import Footer from "./footer";

export default class Baitap1 extends Component {
    render() {
        return (
            <div>
                <div>
                    <Header />
                    <Content />
                    <Sidebar />
                    <Footer />
                </div>

            </div>
        )
    }
}