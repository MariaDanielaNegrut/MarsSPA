import React, {useEffect, useState} from 'react';
import Button from "./Button";
import Message from "./Message";

function Box() {
    const [counter, setCounter] = useState<number>(0);

    useEffect(() => {
        const value: number = localStorage.getItem("counter") ? Number(localStorage.getItem("counter")) : 0;
        setCounter(value);
    }, []);


    return (
        <div>
            <Button value={counter} setValue={setCounter}/>
            <Message text="Message"/>
        </div>
    );
}

export default Box;
