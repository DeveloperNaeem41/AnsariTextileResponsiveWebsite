import React from 'react';
import Common from './Common';
import {NavLink} from 'react-router-dom';
import ansari from './images/About.png';
const About =()=>{

    return (
        <>
        <Common  name="Welcome to About page"
        imgsrc={ansari}
        visit='/contact'
        btname ='Contact Us' />
        </>
    );
        
}
export default About;