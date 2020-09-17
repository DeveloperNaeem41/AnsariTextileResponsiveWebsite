import React from 'react';
import Common from './Common';
import web from './images/textile.jpg';

const Home =()=>{

    return (
        <>
        <Common name="Grow your business with"
        imgsrc={web}
        visit='/about'
        btname ='Get Started' />
        </>


    );
}
export default Home;