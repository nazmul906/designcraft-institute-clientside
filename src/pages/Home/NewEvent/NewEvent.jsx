import React from "react";

export default function NewEvent() {
  return (
    <div className="bg-[#252B68] text-white p-6">
      <div>
        <h1 className="text-center font-semibold text-[2.5rem] mt-5 mb-4">
          Upcoming Events
        </h1>
        <p className=" font-serif mb-10 text-center text-2xl">
          Here is the news of our upcoming events
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="div1">
          <img
            className="h-70 w-70 "
            src="https://educator.qodeinteractive.com/wp-content/uploads/2017/07/event-7.jpg"
          ></img>
          <h1 className="text-center font-semibold text-[2rem] mt-10">
            Graduation
          </h1>
          <p className=" font-serif mb-10 text-center text-lg">
            {" "}
            November 22, 2024 @ 10:00 am - November 22, 2029 @ 9:00 pm
          </p>
          <p className=" font-serif mb-10 text-center text-lg">
            {" "}
            24 Wiley Ave, East York
          </p>
        </div>
        <div className="div1">
          <img
            className="h-70 w-70 "
            src="https://educator.qodeinteractive.com/wp-content/uploads/2017/07/event-8.jpg"
          ></img>
          <h1 className="text-center font-semibold text-[2rem] mt-10">
            Painting Festival
          </h1>
          <p className=" font-serif mb-10 text-center text-lg">
            {" "}
            October 10, 2024 @ 10:00 am - October 10, 2029 @ 6:00 pm
          </p>
          <p className=" font-serif mb-10 text-center text-lg">
            {" "}
            24 Wiley Ave, East York
          </p>
        </div>
        <div className="div1">
          <img
            className="h-70 w-70 mb-[4.7rem]"
            src="https://schoolsweek.co.uk/wp-content/uploads/2020/04/Science-scientists-SM.jpg"
          ></img>
          <h1 className="text-center font-semibold text-[2rem] mt-10">
            Lets talk science
          </h1>
          <p className=" font-serif mb-10 text-center text-lg">
            {" "}
            November 22, 2024 @ 10:00 am - November 22, 2029 @ 9:00 pm
          </p>
          <p className=" font-serif mb-10 text-center text-lg">
            {" "}
            24 Wiley Ave, East York
          </p>
        </div>
      </div>
    </div>
  );
}
