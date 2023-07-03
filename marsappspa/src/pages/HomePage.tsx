import React, {useEffect, useState} from 'react';
import Box from "../counter/Box";
import SimplePage from "./SimplePage";
import {Camera, Rover} from "../types";
import axios from "axios";
import Select, {SingleValue} from 'react-select'

function HomePage() {
    const [rovers, setRovers] = useState<Rover[]>([]);
    const [selectedRover, setSelectedRover] = useState<Rover | null>(null);
    const [selectedCamera, setSelectedCamera] = useState<Camera | null>(null);

    useEffect(()  => {
        axios.get(
            "http://localhost:8000/rovers",
            {
                headers: {
                    Accept: 'application/json',
                }
            }
        ).then((response) => {
            const transformedData: Rover[] = response.data.map((item: any) => {
                return {
                    id: item.id,
                    name: item.name,
                    cameras: item.cameras
                };
            });
            setRovers(transformedData);
        });
    }, []);

    const handleRoverChange = (option: SingleValue<Rover>) => {
        setSelectedRover(option);
        console.log(option);
    }

    const handleCameraChange = (option: SingleValue<Camera>) => {
        setSelectedCamera(option);
        console.log(option);
    }

    return (
        <>
            <SimplePage title="NASA" imgSrc="https://www.nasa.gov/sites/default/files/thumbnails/image/viper_on_moon_copy.jpg">
                <p style={{fontSize: "16px", textAlign: "left", padding: "1rem"}}>
                    NASA’s human lunar exploration plans under Artemis call for sending the first woman and first person of color to the surface of the Moon and establishing sustainable exploration by the end of the decade. Working with U.S. companies and international partners, we will uncover new scientific discoveries and lay the foundation for private companies to build a lunar economy. The agency will use what we learn on the Moon to prepare for humanity's next giant leap – sending astronauts to Mars.
                </p>
                <p style={{fontSize: "16px", textAlign: "left", padding: "1rem"}}>
                    It all starts with U.S companies delivering scientific instruments and technology demonstrations to the lunar surface, followed by a spaceship, called the Gateway, in orbit around the Moon that will support human and scientific missions, and human landers that will take astronauts to the surface of the Moon. The agency’s powerful Space Launch System rocket and Orion spacecraft will be the backbone to build the Gateway and transport astronauts to and from Earth.
                </p>
            </SimplePage>
            <a style={{color: "white", background: "lightblue", padding: "10px"}} href="/iod"> Click here for image of the day!</a>
            <br/>
            <br/>

            <div style={{display: "flex", flexDirection: "column", width: "100%", justifyContent: "center", alignContent: "center"}}>
                <Select<Rover>
                    className="select"
                    value={selectedRover}
                    onChange={handleRoverChange}
                    getOptionLabel={(rover: Rover) => rover.name}
                    getOptionValue={(rover: Rover) => rover.id.toString()}
                    options={rovers}
                    isClearable={true}
                />
                {
                    selectedRover &&
                    <Select<Camera>
                        className="select"
                        value={selectedCamera}
                        onChange={handleCameraChange}
                        getOptionLabel={(camera: Camera) => camera.name}
                        getOptionValue={(camera: Camera) => camera.id.toString()}
                        options={selectedRover.cameras}
                        isClearable={true}
                    />
                }
            </div>

            <Box/>
        </>
    );
}

export default HomePage;


