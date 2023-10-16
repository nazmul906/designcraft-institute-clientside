import React from "react";
import PopularClass from "../PopularClass/PopularClass";
import Slider from "../Slider/Slider";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
import Banner from "../Banner/Banner";
import LatestNews from "../LatestNews/LatestNews";
import NewEvent from "../NewEvent/NewEvent";
import OverallCountdown from "../OverallCountdown/OverallCountdown";
const Home = () => {
  return (
    <div>
      {/* <h4>this is home</h4> */}
      {/* <Slider></Slider> */}
      <Banner></Banner>
      <PopularClass></PopularClass>
      <PopularInstructor></PopularInstructor>
      <LatestNews></LatestNews>
      <NewEvent></NewEvent>
      <OverallCountdown></OverallCountdown>
    </div>
  );
};

export default Home;
