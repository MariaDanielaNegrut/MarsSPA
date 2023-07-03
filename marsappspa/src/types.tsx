export interface CounterProps {
    counter: number,
    updateCounter: (counter: number) => void
};


export interface Camera {
    id: number,
    name: string
};

export interface Rover {
    id: number,
    name: string,
    cameras: Camera[]
};