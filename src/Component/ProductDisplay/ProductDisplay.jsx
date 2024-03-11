import React, { useContext } from "react";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from '../../context/ShopContext'



const ProductDisplay = (props) => {
  const { addToCart } = useContext(ShopContext)
  const { product } = props;
  return (
    <div className="flex my-4 justify-around">
      <div className="right justify-start items-center flex ">
        <div>
          <img className="m-2" src={product.image} alt="" width={120} />
          <img className="m-2" src={product.image} alt="" width={120} />
          <img className="m-2" src={product.image} alt="" width={120} />
          <img className="m-2" src={product.image} alt="" width={120} />
        </div>
        <div>
          <img className="h-full" src={product.image} alt="" width={500} />
        </div>
      </div>
      <div className="left flex flex-col justify-around w-2/4">
        <div>
          <h1 className="font-bold text-3xl">{product.name}</h1>
          <div className="flex items-center mt-4">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p className="ml-2">(145)</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className=" mr-4 font-semibold text-3xl">
            ${product.new_price}
          </div>
          <div className="line-through font-medium text-2xl text-red-500">
            ${product.old_price}
          </div>
        </div>
        <div>
          <p>a light weight t-shrt</p>
        </div>
        <div>
          <h1 className="font-semibold text-lg">Select Size</h1>
          <div className="flex">
            <div className="py-2 px-4 border border-gray-200 hover:bg-gray-200 font-semibold text-lg m-2">
              S
            </div>
            <div className="py-2 px-4 border border-gray-200 hover:bg-gray-200   font-semibold text-lg m-2">
              M
            </div>
            <div className="py-2 px-4 border border-gray-200 hover:bg-gray-200  font-semibold text-lg m-2">
              L
            </div>
            <div className="py-2 px-4 border border-gray-200 hover:bg-gray-200  font-semibold text-lg m-2">
              XL
            </div>
            <div className="py-2 px-4 border border-gray-200 hover:bg-gray-200  font-semibold text-lg m-2">
              XXL
            </div>
          </div>
        </div>
        <button onClick={() => {addToCart(product.id)}} className="pointer py-2 px-4 hover:bg-red-400  bg-red-500 font-semibold text-lg text-white rounded-sm    ">
          Add to Cart
        </button>
        <div>
          <p className="font-semibold">
            Category: <span>Women, T-shirt, Crop-top</span>
          </p>
          <p className="font-semibold mt-2">
            Tages: <span>#Latest, #Modern</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
