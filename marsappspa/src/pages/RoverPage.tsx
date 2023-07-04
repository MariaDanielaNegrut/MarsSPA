import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Camera, Rover, RoverImage} from "../types";
import Select, {SingleValue} from "react-select";
import Card from "../card/Card";

function RoverPage() {
    const [rovers, setRovers] = useState<Rover[]>([]);
    const [selectedRover, setSelectedRover] = useState<Rover | null>(null);
    const [selectedCamera, setSelectedCamera] = useState<Camera | null>(null);
    const [photos, setPhotos]  = useState<RoverImage[] | null>(null);

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


    useEffect(()  => {
        if (selectedRover !== null && selectedCamera !== null) {
            axios.get(
                `http://localhost:8000/rovers/${selectedRover?.name}/photos/${selectedCamera?.name}/`,
                {
                    headers: {
                        Accept: 'application/json',
                    }
                }
            ).then((response) => {
                if (response.data) {
                    const transformedData: RoverImage[] = response.data.map((item: any) => {
                        return {
                            id: item.id,
                            imgSrc: item.img_src,
                            earthDate: item.earth_date
                        }
                    });

                    setPhotos(transformedData.slice(0, 50));
                }
            });
        }
    }, [selectedRover, selectedCamera]);

    const handleRoverChange = (option: SingleValue<Rover>) => {
        setSelectedRover(option);
        if (option === null) {
            setSelectedCamera(null);
        }
    }

    const handleCameraChange = (option: SingleValue<Camera>) => {
        setSelectedCamera(option);
    }

    return (
        <>
            <h1 style={{color: "#698eff", fontFamily: "Roboto", textAlign: "center", fontSize: "5rem"}}>Rover photos</h1>
            <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr", padding: "3rem", color: "white", background: "rgb(233, 240, 247, 0.1)"}}>
                <p style={{fontSize: "16px", textAlign: "left", padding: "1rem"}}>
                    A Mars rover is a motor vehicle designed to travel on the surface of Mars. Rovers have several advantages over stationary landers: they examine more territory, they can be directed to interesting features, they can place themselves in sunny positions to weather winter months, and they can advance the knowledge of how to perform very remote robotic vehicle control. They serve a different purpose than orbital spacecraft like Mars Reconnaissance Orbiter. A more recent development is the Mars helicopter.
                </p>
                <p style={{fontSize: "16px", textAlign: "left", padding: "1rem"}}>
                    Circa the 2010s, NASA had established certain goals for the rover program.
                    NASA distinguishes between "mission" objectives and "science" objectives. Mission objectives are related to progress in space technology and development processes. Science objectives are met by the instruments during their mission in space.
                </p>
                <div style={{textAlign: "left"}}>
                    <p style={{fontSize: "16px", textAlign: "left", padding: "1rem"}}>
                        The science instruments are chosen and designed based on the science objectives and goals. The primary goal of the Spirit and Opportunity rovers was to investigate "the history of water on Mars".
                        The four science goals of NASA's long-term Mars Exploration Program are:
                    </p>
                    <ul>
                        <li>
                            Determine whether life ever arose on Mars
                        </li>
                        <li>
                            Characterize the climate of Mars
                        </li>
                        <li>
                            Characterize the geology of Mars
                        </li>
                        <li>
                            Prepare for human exploration of Mars
                        </li>
                    </ul>
                </div>
            </div>

            <div style={{display: "flex", flexDirection: "column", width: "100%", justifyContent: "center", alignContent: "center"}}>
                <h3 style={{color: "#698eff", fontFamily: "Roboto", textAlign: "center", fontSize: "2rem"}}>Select a rover:</h3>

                <Select<Rover>
                    className="select"
                    value={selectedRover}
                    onChange={handleRoverChange}
                    getOptionLabel={(rover: Rover) => rover.name}
                    getOptionValue={(rover: Rover) => rover.id.toString()}
                    options={rovers}
                    isClearable={true}
                />
                <br/>
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
                {
                    selectedRover && selectedCamera && photos &&
                        <div style={{display: "grid", gridTemplateColumns: "auto auto", padding: "2rem", gap: "2rem"}}>
                            {
                                photos.map((image, index) => {
                                    return <Card key={index} text={image.earthDate} imgSrc={image.imgSrc}/>
                                })
                            }
                        </div>
                }
            </div>
        </>
    );
}

export default RoverPage;


