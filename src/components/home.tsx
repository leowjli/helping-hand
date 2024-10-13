import React, { useRef } from "react";
import Header from "./header";
import Resources from "./resources";

const Home: React.FC = () => {
    const resourcesRef = useRef<HTMLElement>(null);

    return (
        <>
            <Header resourcesRef={resourcesRef} />
            <Resources ref={resourcesRef} />
        </>
    );
}

export default Home;