import React from "react";
import Phone from "./phone";

export default function ListPhone(){
    return (
        <div>
            <section id="smartphone" className="container-fluid pt-5 pb-5 bg-dark">
                <h1 className="text-white text-center">BEST SMARTPHONE</h1>
                <div className="row">
                    <Phone/>
                    <Phone/>
                    <Phone/>
                    <Phone/>
                </div>
            </section>
        </div>
    )
}