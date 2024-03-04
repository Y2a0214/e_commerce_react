import React, { useContext } from "react";
import dropDown from "../Component/Assets/dropdown_icon.png";
import { ShopContext } from "../context/ShopContext";
import Item from "../Component/items/Item";

export const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="container mx-auto">
      <div className="flex justify-between m-4 items-center">
        <p className="font-bold">Showing 1 - 12 <span className="font-medium">out of 50 Products</span></p> 
        <div className="flex items-center border border-gray-200 rounded-full py-2 px-5 hover:bg-gray-200">
          Short by <img src={dropDown} alt=""/>
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else{
            return null;
          }
        })}
      </div>
      <div className="flex justify-center my-7 ">
        <button className="border border-gray-200 rounded-full py-3 px-5 hover:bg-gray-200">Explore More</button>
      </div>
    </div>
  );
};
