import React from 'react';
import Banner from './Banner';
import Innovation from './Innovation';
import ReviewSection from './ReviewSection';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
           
            <Banner/>
            <Innovation/>
            <Tools/>
        
            <ReviewSection/>
        </div>
    );
};

export default Home;