import React from 'react';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import Contact from '../Contact/Contact';
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
             <BusinessSummary/>
            <ReviewSection/>
            <Contact/>
        </div>
    );
};

export default Home;