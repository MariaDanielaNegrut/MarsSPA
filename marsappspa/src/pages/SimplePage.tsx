import React from 'react';

function SimplePage({title, imgSrc, children}: {title: string, imgSrc: string, children: React.ReactNode}) {
    return (
        <div>
            <h1 style={{color: "#698eff", fontFamily: "Roboto", textAlign: "center", fontSize: "5rem"}}>{title}</h1>
            <div>
                <img src={imgSrc} style={{height: "500px"}}/>
            </div>
            <div style={{display: "flex", flexDirection: "row", padding: "3rem", color: "white"}}>
                { children }
            </div>
        </div>
    );
}

export default SimplePage;
