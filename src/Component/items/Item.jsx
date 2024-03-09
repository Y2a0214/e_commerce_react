import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div className=" w-80 m-6">
      
        <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0, 0)} src={props.image} alt="" /></Link>
        <p className="font-normal my-2">{props.name}</p>
      
      <div className="item-prices flex">
        <div className="item-price-new mr-2 font-semibold">${props.new_price}</div>
        <div className="item-price-old ml-2 font-normal line-through">${props.old_price}</div>
      </div>
    </div>
  );
};

export default Item;
