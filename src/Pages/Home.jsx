import React from 'react';
import Hero from '../Components/Hero';
import TopRecipe from '../Components/TopRecipe';
import FaqSection from '../Components/FaqSection';
import Shere from '../Components/Shere';

const Home = () => {
    return (
        <div>
            <Hero/>
            <TopRecipe/>
            <FaqSection/>
            <Shere/>
        </div>
    );
};

export default Home;