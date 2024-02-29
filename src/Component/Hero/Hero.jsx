import React from "react";
import handicon from "../Assets/hand_icon.png";
import aroowicon from "../Assets/arrow.png";
import heroimg from "../Assets/women_shopping.png";
const Hero = () => {
  return (
    <div className="Hero bg-gradient-to-b h-screen from-pink-200 flex justify-around items-center">
      <div className="hero-left  leading-10">
        <h2 className="font-medium text-2xl text-mycolor">NEW ARRIVALS ONLY</h2>
        <div className="flex flex-col">
          <div className=" flex items-center">
            <p className="font-sans font-medium text-8xl mr-4 text-mycolor">new</p>
            <img src={handicon} alt="" width={80} />
          </div>
          <p className="font-sans font-medium text-8xl text-mycolor">colleaction</p>
          <p className="font-sans font-medium text-8xl text-mycolor">for everyone</p>
        </div>
        <div className="hero-latest-btn flex justify-center items-center bg-red-500 w-60 rounded-full py-3 mt-16">
          <div className="mr-3 font-semibold text-white text-base">Latest Collection</div>
          <img src={aroowicon} alt="" width={30}/>
        </div>
      </div>
      <div className="hero-right">
        <img className="max-w-xl " src={heroimg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
