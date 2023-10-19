import React from "react";
import "./Certificate.css";

const Certificate = () => {
  return (
    <div className="flex bg-[#181E5D]  text-white p-10">
      <div className="flex-1">
        <img
          //   className="certificate-image "
          src="https://i.ibb.co/tKfSj41/premium-photo-1661302854269-2fc8f0d35d44-auto-format-fit-crop-q-80-w-1470-ixlib-rb-4-0.jpg"
          alt="Certificate"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <div className="flex-1 ml-8">
        <div className="container flex flex-col mt-[2rem]">
          <h4 className="text-2xl mb-8 text-center text-title">
            Ensure your wuality learning
          </h4>
          <div className="ring-container">
            <div className="ring"></div>
            <h1 className=" text-4xl ">
              Skills Certificate From the DesignCraft
            </h1>{" "}
            <div className="image-wrapper mt-12">
              {/* <div className="ring"></div> */}
            </div>
          </div>{" "}
          <div className="mt-[2.5rem] ml-[15rem]">
            <button className="bg-[#D9930D] hover:bg-[#95709A] text-white font-bold py-2 px-4 rounded  bg-[#5D69E5]">
              Get Start Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
