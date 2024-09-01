import { StaticImageData } from 'next/image';

import photo1 from "./photos/1.png";
import photo2 from "./photos/2.png";
import photo3 from "./photos/3.png";
import photo4 from "./photos/4.png";
import photo5 from "./photos/5.png";
import photo6 from "./photos/6.png";

export type WonderImage = {
    id: string,
    name: string,
    src: StaticImageData;
    photographer: string;
    location: string;
};

const wondersImages: WonderImage[] = [
    {
        id: "1",
        name: "Eiffel Tower",
        src: photo1,
        photographer: "Leonardo da Vinci",
        location: "Paris, France",
    },
    {
        id: "2",
        name: "Great Wall of China",
        src: photo2,
        photographer: "Shi Huang",
        location: "Beijing, China",
    },
    {
        id: "3",
        name: "Taj Mahal",
        src: photo3,
        photographer: "Mughal Emperor Shah Jahan",
        location: "Agra, India",
    },
    {
        id: "4",
        name: "Colosseum",
        src: photo4,
        photographer: "Roman Emperor Constantine",
        location: "Rome, Italy",
    }, {
        id: "5",
        name: "Sydney Opera House",
        src: photo5,
        photographer: "Johannes Gutenberg",
        location: "Sydney, Australia",
    }, {
        id: "6",
        name: "Machu Picchu",
        src: photo6,
        photographer: "Christopher Columbus",
        location: "Peru, South America",
    }, {
        id: "7",
        name: "Great Wall of China",
        src: photo2,
        photographer: "Shi Huang",
        location: "Beijing, China",
    }
]

export default wondersImages;