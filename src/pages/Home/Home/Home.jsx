import React from "react";
import Banner from "../Banner/Banner";
import PopularClass from "../PopularClass/PopularInstructor";
import AboutUs from "../AboutUs/AboutUs";

const Home = () => {
  return (
    <div>
      {/* <h1>home</h1> */}
      <Banner></Banner>
      <PopularClass></PopularClass>
      <AboutUs></AboutUs>
    </div>
  );
};

export default Home;
