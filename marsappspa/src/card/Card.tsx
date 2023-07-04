import React from 'react';

function Card({imgSrc, text}: {imgSrc: string, text: string}) {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
            height: "700px",
            width: "100%",
            background: "rgb(233, 240, 247, 0.5)"
        }}>
            <img style={{height: "500px", width: "500px", alignSelf: "center"}} src={imgSrc}/>
            <h4 style={{color: "white", fontFamily: "Roboto", textAlign: "center", fontSize: "1.5rem"}}>{text}</h4>
        </div>
    );
}

export default Card;
