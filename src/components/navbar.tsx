import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandHoldingMedical } from "@fortawesome/free-solid-svg-icons";

const Nav: React.FC = () => {
    return (
        // Nav
        <nav id="nav">
            <h2><Link to="../">Helping Hand <FontAwesomeIcon icon={faHandHoldingMedical} /></Link></h2>
            <ul className='menu'>
                <li className="current"><Link to="/">Home</Link></li>
                <li className="current"><Link to="/">About Us</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;