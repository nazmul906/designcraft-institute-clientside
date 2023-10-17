import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
// import "./addclass.css";
const AddClass = () => {
  const { user } = useContext(AuthContext);
  const [className, setClassName] = useState("");
  const [classImage, setClassImage] = useState("");
  const [availableSeats, setAvailableSeats] = useState("");
  const [price, setPrice] = useState("");
  const instructorName = user?.displayName;
  const instructorEmail = user?.email;
  const status = "pending";
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform the necessary actions on form submission
    // You can access the form field values using the state variables

    console.log({
      className,
      classImage,
      instructorName,
      instructorEmail,
      availableSeats,
      price,
      status,
    });

    const classdata = {
      className: className,
      classImage: classImage,
      instructorName: instructorName,
      instructorEmail: instructorEmail,
      availableSeats: availableSeats,
      price: price,
      status: status,
    };

    fetch("http://localhost:5000/addclass", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(classdata),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("class added successfully");
          reset.form();
        }
      });
  };

  return (
    <div
      style={{ maxHeight: "900px", overflowY: "auto" }}
      className="flex justify-center items-center"
    >
      <form onSubmit={handleSubmit} className=" ">
        <div className="p-4">
          <label className="text-lg font-bold">Add a Course</label>
        </div>
        <div className="p-4">
          <label className="text-gray-700">Course Name</label>
          <input
            type="text"
            className="input input-bordered w-full "
            value={className}
            onChange={(e) => setClassName(e.target.value)}
            required
          />
        </div>
        <div className="p-4">
          <label className="text-gray-700">Class Image</label>
          <input
            type="text"
            className="input input-bordered w-full"
            value={classImage}
            onChange={(e) => setClassImage(e.target.value)}
            required
          />
        </div>
        <div className="p-4">
          <label className="text-gray-700">Instructor Name</label>
          <input
            type="text"
            className="input input-bordered w-full "
            // value={instructorName}
            defaultValue={user?.displayName}
            readOnly
          />
        </div>
        <div className="p-4">
          <label className="text-gray-700">Instructor Email</label>
          <input
            type="email"
            className="input input-bordered w-full "
            defaultValue={user?.email}
            readOnly
          />
        </div>
        <div className="p-4">
          <label className="text-gray-700">Available Seats</label>
          <input
            type="number"
            className="input input-bordered w-full "
            value={availableSeats}
            onChange={(e) => setAvailableSeats(e.target.value)}
            required
          />
        </div>
        <div className="p-4">
          <label className="text-gray-700">Price</label>
          <input
            type="number"
            className="input input-bordered w-full "
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="p-4">
          <label className="text-gray-700">Status</label>
          <input
            type="text"
            className="input input-bordered w-full"
            // value={classes}
            defaultValue={status}
            // onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="p-4">
          <input
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            value="Submit"
          />
        </div>
      </form>
    </div>
  );
};
export default AddClass;
