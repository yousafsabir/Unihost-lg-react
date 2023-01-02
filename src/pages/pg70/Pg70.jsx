import React from 'react'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import pg70Main from "./pg70Main.svg";
import page70Footer from "./page70Footer.svg";

export default function Pg70() {
    return (
        <div>
            <Navbar />
            <div className="container">
                <img src={pg70Main} alt="" />

            </div>

            <Footer />

        </div>
    )
}
