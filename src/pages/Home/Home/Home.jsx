import React from "react";
import Banner from "../Banner/Banner";
import PopularClass from "../PopularClass/PopularClass";
import AboutUs from "../AboutUs/AboutUs";

import FeaturedCourse from "../FeaturedCourse/FeaturedCourse";
import NewEvent from "../NewEvent/NewEvent";
import Certificate from "../Certificate/Certificate";
import LatestNews from "../LatestNews/LatestNews";

const Home = () => {
  return (
    <div>
      {/* <h1>home</h1> */}
      <Banner></Banner>
      <PopularClass></PopularClass>
      <AboutUs></AboutUs>
      <FeaturedCourse></FeaturedCourse>
      <NewEvent></NewEvent>
      <Certificate></Certificate>
      <LatestNews></LatestNews>
    </div>
  );
};

export default Home;
