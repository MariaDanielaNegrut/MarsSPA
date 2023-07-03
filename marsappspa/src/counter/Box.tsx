import React, {useContext, useEffect, useState} from 'react';
import Button from "./Button";
import Message from "./Message";
import {CounterProps} from "../types";
import {CounterContext} from "../App";

function Box() {
    return (
        <div>
            <Button />
            <Button />
            <Message text="Message"/>
        </div>
    );
}

export default Box;
