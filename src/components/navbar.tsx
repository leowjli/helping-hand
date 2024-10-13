import React from 'react';
import { Link } from "react-router-dom";

const Nav: React.FC = () => {
    return (
        // <!-- Nav -->
        <nav id="nav">
            <ul>
                <li className="current"><Link to="index.html">Home</Link></li>
                <li>
                    <Link to="#" aria-haspopup="true" aria-expanded="false">Dropdown</Link>
                    <ul>
                        <li><Link to="#">Lorem ipsum dolor</Link></li>
                        <li><Link to="#">Magna phasellus</Link></li>
                        <li><Link to="#">Etiam dolore nisl</Link></li>
                        <li>
                            <Link to="#">Phasellus consequat</Link>
                            <ul>
                                <li><Link to="#">Magna phasellus</Link></li>
                                <li><Link to="#">Etiam dolore nisl</Link></li>
                                <li><Link to="#">Veroeros feugiat</Link></li>
                                <li><Link to="#">Nisl sed aliquam</Link></li>
                                <li><Link to="#">Dolore adipiscing</Link></li>
                            </ul>
                        </li>
                        <li><Link to="#">Veroeros feugiat</Link></li>
                    </ul>
                </li>
                <li><Link to="left-sidebar.html">Left Sidebar</Link></li>
                <li><Link to="right-sidebar.html">Right Sidebar</Link></li>
                <li><Link to="no-sidebar.html">No Sidebar</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;