import React from "react";
import { AiFillContainer, AiOutlineHighlight } from "react-icons/ai";

const AboutUs = () => {
  return (
    <div className="flex bg-[#262D76] p-[7.5rem]">
      <div className="flex-1 ">
        <img
          src="https://i.ibb.co/MV2tj66/premium-photo-1683120640224-9e8e52ed7ab3-auto-format-fit-crop-q-80-w-1470-ixlib-rb-4-0.jpg"
          alt="Training Image"
          className="w-full h-full object-cover rounded-full"
        ></img>
      </div>
      <div className="flex-1 text-white ml-12">
        <p className="bg-[#252C74] text-white mb-4 text-xl ml-4">About us</p>
        <h1 className="text-5xl mb-4">Creating a Lifelong Best Community</h1>
        <p className="mb-4 font-serif">
          It uses a dictionary of over 200 Latin words, combined with a handful
          of model sentence structures, to generate Lorem Ipsum which looks
        </p>
        <div className="flex flex-col">
          <div
            className="flex  items-center  "
            style={{
              border: "2px solid #703224 rounded",
              borderRadius: "10px",
              marginBottom: "30px",
            }}
          >
            {" "}
            <AiFillContainer
              style={{ height: "70px", width: "50px", paddingRight: "10px" }}
            />
            <div className="ml-4 ">
              <h1 className="text-xl">Flexiable Classes</h1>
              <p className="font-serif  mt-3">
                The generated Lorem Ipsum is therefore always free from
                repetition, injected humour, or non-characteristic words etc.
              </p>
            </div>
          </div>
          <div className="flex ">
            {" "}
            <AiOutlineHighlight
              style={{ height: "70px", width: "50px", paddingRight: "10px" }}
            />
            <div className="ml-4">
              <h1 className="text-xl">Live Class From anywhere</h1>
              <p className="font-serif mt-3 ">
                The generated Lorem Ipsum is therefore always free from
                repetition, injected humour, or non-characteristic words etc.
              </p>
            </div>
          </div>

          <div className="mt-6">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  bg-[#5D69E5]">
              Discover more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
