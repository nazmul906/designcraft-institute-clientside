import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PopularClass = () => {
  const [mostEnrollmentClasses, setMostEnrollmentClasses] = useState([]);
  const [axiosSecure] = useAxiosSecure();

  useEffect(() => {
    axiosSecure
      .get("https://b7a12-summer-camp-server-side-omega.vercel.app/myclass")
      .then((res) => {
        const classesWithEnrollment = res.data.filter(
          (cls) => cls.paidEnrollment
        );

        if (classesWithEnrollment.length > 0) {
          const sortedClasses = classesWithEnrollment.sort(
            (a, b) => b.paidEnrollment.length - a.paidEnrollment.length
          );

          const topClasses = sortedClasses.slice(0, 6);

          setMostEnrollmentClasses(topClasses);
        }
      });
  }, []);

  return (
    <div className="bg-[#252B68] pb-6">
      <div>
        {" "}
        <h2 className="text-center pt-10 font-semibold text-[2.5rem]  text-white">
          Popular Course
        </h2>
        <p className="text-center pb-10 font-serif text-2xl  text-white">
          This is the popular taken class you can check out!
        </p>
      </div>

      {/* <div className="flex justify-center items-center"> */}
      <div className="grid gap-2 grid-cols-3  ">
        {mostEnrollmentClasses.length > 0 ? (
          mostEnrollmentClasses.map((cls) => (
            <div
              key={cls._id}
              className="card w-96 shadow-2xl ml-[1rem] bg-[#252B68]"
            >
              <figure>
                <img
                  src={cls.classImage}
                  alt={cls.className}
                  style={{
                    height: "120px",
                    width: "120px",
                    borderRadius: "50%",
                    paddingTop: "5px",
                  }}
                />
              </figure>
              <div className="card-body flex items-center ">
                <h2 className="card-title text-white">{cls.className}</h2>
                <p className="text-white">{cls.description}</p>
                <div className="card-actions justify-end pb-3 pr-5">
                  <div className="text-center">
                    <button className="text-center bg-[#D9930D] hover:bg-[#95709A] text-white font-bold py-2 px-4 rounded">
                      Describe more
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
      {/* </div> */}
    </div>
  );
};

export default PopularClass;
