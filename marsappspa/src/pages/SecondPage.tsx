import axios from 'axios';
import React, {useEffect, useState} from 'react';
import SimplePage from "./SimplePage";
import api_key from "../configs/config";

function SecondPage() {
    const [imgUrl, setImageUrl] = useState<string>("");

    useEffect(() => {
        axios.get(
            `https://api.nasa.gov/planetary/apod?api_key=${api_key}`,
            {
                headers: {
                    Accept: 'application/json',
                },
            },
        ).then((response) => {
           setImageUrl(response.data.url);
        });
    }, []);

    return (
        <>
            <SimplePage title="NASA" imgSrc={imgUrl}>
            </SimplePage>
        </>
    );
}

export default SecondPage;


