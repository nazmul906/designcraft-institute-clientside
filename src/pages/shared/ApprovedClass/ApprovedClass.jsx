import React from "react";
import { useState, useEffect } from "react";
import ApprovedClassCard from "./ApproveClassCard";
// import AllClassCard from "../Display/AllClassCard";
const ApprovedClass = () => {
  const [allclass, setaAllclass] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/approveclass")
      .then((res) => res.json())
      .then((data) => setaAllclass(data));
  }, []);

  return (
    <div className="grid gap-4 grid-cols-2">
      {allclass.map((item) => (
        // <AllClassCard key={item.id} allclass={item}></AllClassCard>
        <ApprovedClassCard key={item._id} allclass={item}></ApprovedClassCard>
      ))}
    </div>
  );
};

export default ApprovedClass;
