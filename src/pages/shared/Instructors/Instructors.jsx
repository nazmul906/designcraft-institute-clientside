import React, { useState, useEffect } from "react";

import useAxiosSecure from "../../../hooks/useAxiosSecure";
import InstructorInfoCard from "./InstructorCard";

const Instructors = () => {
  const [axiosSecure] = useAxiosSecure();
  const [instructor, setInstructor] = useState([]);

  useEffect(() => {
    axiosSecure
      .get("http://localhost:5000/instructors")
      .then((res) => setInstructor(res.data));
  }, []);
  return (
    <div>
      {/* <h6>{instructor.length}</h6> */}
      <div className="grid grid-cols-2 gap-4">
        {instructor.map((item) => (
          <InstructorInfoCard
            key={item._id}
            instructor={item}
          ></InstructorInfoCard>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
