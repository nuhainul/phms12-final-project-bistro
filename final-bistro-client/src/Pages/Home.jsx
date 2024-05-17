// import React from 'react';

import Banner from "../Components/Banner";
import Category from "../Components/Category";
import Featured from "../Components/Featured";
import PopularMenu from "../Components/PopularMenu";
import Testimonials from "../Components/Testimonials";

const Home = () => {
    return (
        <div>
          {/* Home  */}
          <Banner></Banner> 
          <Category></Category>
          <PopularMenu></PopularMenu>
          {/* Sheff Recommends section */}
          <Featured></Featured>
          <Testimonials></Testimonials>
        </div>
    );
};

export default Home;