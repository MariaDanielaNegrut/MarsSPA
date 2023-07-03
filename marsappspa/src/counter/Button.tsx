import React, {useContext, useEffect, useState} from 'react';
import {CounterContext} from "../App";
import {CounterProps} from "../types";

function Button({text} : {text: string}) {
    const { counter, updateCounter } = useContext(CounterContext) as CounterProps;

    return (
        <button
            style={{ backgroundColor: "white", padding: "20px", color: "black" }}
            value={ counter }
            onClick={ () => {
                updateCounter(counter);
            }}
        >
            {text}
        </button>
    );
}

export default Button;
