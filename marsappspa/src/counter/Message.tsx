import React, {useEffect, useState} from 'react';

function Message(props: {text: string}) {
    return (
        <p style={{color: "white"}}> { props.text } </p>
    );
}

export default Message;
