import React from "react";
import { Link } from "react-router-dom";

const Error: React.FC = () => {
    return (
        // Error page
        <section id="error">
            <h1>Error 404</h1>
            <h3>Page not found</h3>
            <p>Go back to <Link to="../">Helping Hand</Link></p>
        </section>
    );
}

export default Error;