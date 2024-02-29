import React from "react";
import data_product from "../Assets/data";
import Item from "../items/Item";

const Popular = () => {
  return (
    <div style={{height: "70vh"}} className="popular flex flex-col items-center">
      <h1 className="font-bold text-4xl mb-3 text-mycolor">POPULAR IN WOMEN</h1>
      <hr className="w-48 h-2 bg-black rounded-full" />
      <div className="popular-item mt-12 flex">
        {data_product.map((item, i) => {
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
        })}
      </div>
    </div>
  );
};

export default Popular;
