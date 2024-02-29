import React from "react";
import exclusive_image from "../Assets/exclusive_image.png";

const Offers = () => {
  return (
    <div
      style={{ height: "50vh" }}
      className="offer w-3/5 m-auto bg-gradient-to-b from-pink-100 flex items-center my-16 justify-around"
    >
      <div className="offer-right flex flex-col">
        <h1 className="font-bold text-7xl mb-6 text-mycolor">Exclusive</h1>
        <h1 className="font-bold text-7xl mb-5 text-mycolor">Offer For You</h1>
        <p className="font-medium text-xl text-mycolor">
          ONLY ON BEST SELLERS PRODUCTS
        </p>
        <button className="flex justify-center items-center bg-red-500 w-60 rounded-full py-3 mt-8 font-semibold text-white text-lg">
          Check Now
        </button>
      </div>
      <div className="offer-left">
        <img className="w-80" src={exclusive_image} alt="" />
      </div>
    </div>
  );
};

export default Offers;
