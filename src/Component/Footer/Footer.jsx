import React from "react";
import store from "../Assets/store.png";
import insta from "../Assets/instagram_icon.png";
import pin from "../Assets/pintester_icon.png";
import whatsapp from "../Assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <div
      style={{ height: "30vh" }}
      className="footer flex flex-col items-center justify-around"

    >
      <div className="flex items-center w-64 justify-between">
        <img src={store} alt="store" width={60} />
        <p className="font-extrabold text-4xl font-Nunito">SHOPPEE.</p>
      </div>
      <ul className="flex w-1/4 justify-between">
        <li className="font-semibold text-lg">Company</li>
        <li className="font-semibold text-lg">Products</li>
        <li className="font-semibold text-lg">Offices</li>
        <li className="font-semibold text-lg">About</li>
        <li className="font-semibold text-lg">Contact</li>
      </ul>
      <div className="flex w-1/12 justify-around">
        <div className="border border-gray-300 p-1">
          <img src={insta} alt="" width={30}/>
        </div>
        <div className="border border-gray-300 p-1">
          <img src={pin} alt="" width={30}/>
        </div>
        <div className="border border-gray-300 p-1">
          <img src={whatsapp} alt="" width={30}/>
        </div>
      </div>
      <div className="w-full flex flex-col items-center mb-3">
        <hr className="w-10/12 h-px bg-gray-200" />
        <p className="mt-3">CopyRight @ 2024 All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
