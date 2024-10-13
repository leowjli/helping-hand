import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

interface HeroProps {
    resourcesRef: React.RefObject<HTMLElement>; // Accept the ref as a prop
}

const Hero: React.FC<HeroProps> = ({ resourcesRef }) => {
    const handleClick = () => {
        if (resourcesRef.current) {
            resourcesRef.current.scrollIntoView({ behavior: "smooth"})
        }
    }

    return (
        // Intro
        <section id="hero" className="container">
            <div className="banner">
                <h1>Everything you need</h1>
                <h1>When times are tough</h1>
                <p>Helping Hand provides you with the support you need.</p>
                <p>Find the proper aid and shelter plus more in your area below</p>

            </div>
            <div className="resources-button" onClick={handleClick}>
                <h2>Resources</h2>
                <FontAwesomeIcon icon={faArrowDown} className="arrow" />
            </div>
        </section>
    );
}

export default Hero;