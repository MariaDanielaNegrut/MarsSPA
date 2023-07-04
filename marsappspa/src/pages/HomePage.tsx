import React from 'react';
import Box from "../counter/Box";
import SimplePage from "./SimplePage";

function HomePage() {


    return (
        <>
            <SimplePage title="NASA" imgSrc="https://www.nasa.gov/sites/default/files/thumbnails/image/viper_on_moon_copy.jpg">
                <p style={{fontSize: "16px", textAlign: "left", padding: "1rem"}}>
                    NASA’s human lunar exploration plans under Artemis call for sending the first woman and first person of color to the surface of the Moon and establishing sustainable exploration by the end of the decade. Working with U.S. companies and international partners, we will uncover new scientific discoveries and lay the foundation for private companies to build a lunar economy. The agency will use what we learn on the Moon to prepare for humanity's next giant leap – sending astronauts to Mars.
                </p>
                <img src="https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png" style={{width: "30%", height: "30%"}}/>
                <p style={{fontSize: "16px", textAlign: "left", padding: "1rem"}}>
                    It all starts with U.S companies delivering scientific instruments and technology demonstrations to the lunar surface, followed by a spaceship, called the Gateway, in orbit around the Moon that will support human and scientific missions, and human landers that will take astronauts to the surface of the Moon. The agency’s powerful Space Launch System rocket and Orion spacecraft will be the backbone to build the Gateway and transport astronauts to and from Earth.
                </p>
            </SimplePage>
            <a style={{color: "white", background: "lightblue", padding: "10px"}} href="/iod"> Click here for image of the day!</a>
            <br/>
            <br/>

            <Box/>
        </>
    );
}

export default HomePage;


