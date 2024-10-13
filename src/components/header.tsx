import React from "react";
import Hero from "./hero";
import Nav from "./navbar";

interface HeaderProps {
    resourcesRef: React.RefObject<HTMLElement>;
}

const Header: React.FC<HeaderProps> = ({ resourcesRef }) => { 
    return (
        // Header
        <section id="header">
            <Nav />
            <Hero resourcesRef={resourcesRef}/>
        </section>
    );
}

export default Header;