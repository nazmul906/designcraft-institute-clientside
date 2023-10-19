import React from "react";
import Banner from "../Banner/Banner";
import PopularClass from "../PopularClass/PopularClass";
import AboutUs from "../AboutUs/AboutUs";

import FeaturedCourse from "../FeaturedCourse/FeaturedCourse";

const Home = () => {
  return (
    <div>
      {/* <h1>home</h1> */}
      <Banner></Banner>
      <PopularClass></PopularClass>
      <AboutUs></AboutUs>
      <FeaturedCourse></FeaturedCourse>
    </div>
  );
};

export default Home;
