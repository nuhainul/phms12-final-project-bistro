// import React from 'react';

import Banner from "../Components/Banner";
import Category from "../Components/Category";
import PopularMenu from "../Components/PopularMenu";

const Home = () => {
    return (
        <div>
          {/* Home  */}
          <Banner></Banner> 
          <Category></Category>
          <PopularMenu></PopularMenu>
        </div>
    );
};

export default Home;