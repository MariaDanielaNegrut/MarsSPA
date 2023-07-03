import React, {useContext, useEffect, useState} from 'react';
import {CounterContext} from "../App";
import {CounterProps} from "../types";

function Message(props: {text: string}) {
    const { counter, updateCounter } = useContext(CounterContext) as CounterProps;

    return (
        <p style={{ color: "white" }}>
            I've been clicked {counter}  times!
        </p>
    );
}

export default Message;
