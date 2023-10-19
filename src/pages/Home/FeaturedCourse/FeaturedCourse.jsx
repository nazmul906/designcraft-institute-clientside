import React from "react";
import "./feature.css";
const favoriteCourses = [
  {
    id: 1,
    courseName: "Introduction to Python ",
    image: "https://i.ibb.co/j50D7x6/800px-Python-logo-notext-svg.png",
    info: "Enhance yout python skill",
  },
  {
    id: 2,
    courseName: "Web Development Fundamentals",
    image:
      "https://i.ibb.co/4WFzsxZ/premium-photo-1678565869434-c81195861939-auto-format-fit-crop-q-80-w-1470-ixlib-rb-4-0.jpg",
    info: "This course is about latest web skill",
  },
  {
    id: 3,
    courseName: "Data Science for Beginners",
    image:
      "https://d1m75rqqgidzqn.cloudfront.net/wp-data/2019/09/11134058/What-is-data-science-2.jpg",
    info: "Level up your data science knowledge",
  },
  {
    id: 4,
    courseName: "JavaScript Essentials",
    image: "https://i.ytimg.com/vi/jS4aFq5-91M/maxresdefault.jpg",
    info: "Master javascript with this coourse",
  },
];

const FeaturedCourse = () => {
  return (
    <div className="bg-[#252B68] text-white p-5 bg-img">
      <h2 className="text-center mt-5 mb-4 font-semibold text-[2.5rem]  text-white">
        Featured Course On This Month
      </h2>
      <p className=" font-serif mb-5 text-center text-2xl">
        Checkout featured course here
      </p>
      <div className="p-6 space-x-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {favoriteCourses.map((course) => (
          <div
            key={course.id}
            className="bg-[#28307D] p-4 rounded-lg shadow-md"
          >
            <img
              src={course.image}
              alt={course.courseName}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-2 ">{course.courseName}</h2>
              <p className="font-serif">{course.info}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCourse;
