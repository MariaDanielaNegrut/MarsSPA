import React from 'react';
import {Link} from "react-router-dom";

function Header() {
    return (
        <header style={{
            background: "rgb(233, 240, 247, 0.2)",
            padding: "1rem",
            color: "white",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around"
        }}>
            <Link className="header-link" to="/iod">Home</Link>
            <Link className="header-link" to="/iod">Image of the day</Link>
            <Link className="header-link" to="/rover">Rover cams</Link>
        </header>
    );
}

export default Header;
