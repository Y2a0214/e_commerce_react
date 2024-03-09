import React from "react";
import data from "../Assets/data"
import Item from "../items/Item"

const RelatedProduct = () => {
  return (
    <div  className="popular flex flex-col items-center my-11">
      <h1 className="font-bold text-4xl mb-3 text-mycolor">Related Product</h1>
      <hr className="w-48 h-1 bg-black rounded-full" />
      <div className="popular-item mt-12 flex flex-wrap justify-center">
        {data.map((item, i) => {
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

export default RelatedProduct;
