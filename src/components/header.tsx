import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Navbar";
import Hero from "./hero";
import Banner from "./banner";

const Header: React.FC = () => {
    return (
        // <!-- Header -->
        <section id="header">
            {/* <!-- Logo --> */}
            <h1><Link to="./App.tsx">Dopetrope</Link></h1>
            <Nav />
            <Hero />
            <Banner />
        </section>
    );
}

export default Header;