import React from "react";

export default function LatestNews() {
  return (
    <div className="bg-[#181E5D]  text-white p-3">
      <div>
        <h1 className="text-center font-semibold text-[2.5rem] mt-10">
          Latest News
        </h1>
        <p className=" font-serif mb-10 text-center text-2xl">
          This is the latest news about our courses and plan{" "}
        </p>
      </div>
      <div>
        <div className=" flex justify-center items-center  mb-10 ">
          <img
            className="w-60 h-60 object-cover"
            src="https://educator.qodeinteractive.com/wp-content/uploads/2017/07/blog-featured-1-1-600x600.jpg"
          ></img>
          <div className="ml-10">
            <h1 className="font-semibold text-xl">
              Helping Students Is the Key
            </h1>
            <p className="font-serif ">
              Lorem Ipsn gravida nibh vel velit auctor aliquet. Aenean
              sollicitudin, lorem quis bibendum auc
            </p>
            <h5>17 june, 2023</h5>
          </div>
        </div>
        <div className=" flex  justify-center items-center  mb-10">
          <img
            className="w-60 h-60 object-cover"
            src="https://educator.qodeinteractive.com/wp-content/uploads/2017/07/blog-featured-9-600x600.jpg"
          ></img>
          <div className="ml-10">
            <h1 className="font-semibold text-xl">Bring the Tutoring Home</h1>
            <p className="font-serif ">
              Lorem Ipsn gravida nibh vel velit auctor aliquet. Aenean
              sollicitudin, lorem quis bibendum auc
            </p>
            <h5>July 20, 2023</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
