import React from 'react';
import Button from "./Button";
import Message from "./Message";

function Box() {
    return (
        <div>
            <Button text="Click me!"/>
            <Button text="NO! Click ME!"/>
            <Message />
        </div>
    );
}

export default Box;
