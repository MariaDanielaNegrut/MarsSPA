import React, {useEffect, useState} from 'react';

function Button({value, setValue}: {value: number, setValue: (counter: number) => void}) {
    return (
        <button
            style={{backgroundColor: "white", padding: "20px", color: "black"}}
            value={value} onClick={() => {
            setValue(value + 1);
            localStorage.setItem("counter", (value + 1).toString());
        }}>
            I've been clicked <span style={{color: "blue"}}>{value}</span> times!
        </button>
    );
}

export default Button;
