// CardGrid.js
import React, { useEffect } from 'react';
import Card from './Card';
import Script from 'next/script';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..



const data = [
    { title: 'Eva & Raffi', description: 'Description 1', imageUrl: 'https://placekitten.com/300/200' },
    { title: 'Card 2', description: 'Description 2', imageUrl: 'https://placekitten.com/300/201' },
    { title: 'Card 3', description: 'Description 3', imageUrl: 'https://placekitten.com/300/202' },
    { title: 'Card 4', description: 'Description 4', imageUrl: 'https://placekitten.com/300/203' },
    // Add more data as needed
];
const CardGrid = ({ data }) => {



    return (
        <>
            <div data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500" className=" my-20 mx-20 grid grid-cols-2 gap-10  sm:grid-cols-4 sm:grid:">
                {data && data.map((item, index,) => (
                    <Card key={index} {...item} />
                ))}
            </div>
            <Script src='https://unpkg.com/aos@2.3.1/dist/aos.js'></Script>
        </>
    );
};

export default CardGrid;
