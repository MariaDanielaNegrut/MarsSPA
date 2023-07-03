import React, {useEffect, useState} from 'react';

function Button() {
    const [value, setValue] = useState<number>(0);

    useEffect(() => {
        const counter: number = localStorage.getItem("counter") ? Number(localStorage.getItem("counter")) : 0;
        setValue(counter);
    }, []);

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
