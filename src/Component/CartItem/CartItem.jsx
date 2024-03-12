import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

const CartItem = () => {
  const { all_product, CartItem, removeToCart, getTotalCartAmount } =
    useContext(ShopContext);
  return (
    <>
      <div className="mx-auto container my-6">
        <div>
          <h1 className="font-semibold text-3xl p-3 text-mycolor">Shopping Cart</h1>
        </div>
        <hr />
        {all_product.map((product) => {
          if (CartItem[product.id] > 0) {
            return (
              <div className="border border-gray-200 rounded-sm my-4 p-2">
                <div className="flex justify-around">
                  <div>
                    <img src={product.image} alt="" width={150} />
                  </div>
                  <div className="mx-5 flex flex-col justify-evenly items-start w-full">
                    <div className="flex justify-between w-full">
                      <p className="text-mycolor font-bold text-2xl">
                        {product.name}
                      </p>
                      <p className="bg-pink-200 px-2 py-2 rounded-md font-semibold">
                        Premium Quality
                      </p>
                    </div>
                    <p className="text-base font-medium">
                      Price: ${product.new_price}
                    </p>
                    <button className="text-base font-medium">
                      Qty: {CartItem[product.id]}
                    </button>
                    <p className="text-base font-medium">
                      Qty Total: ${product.new_price * CartItem[product.id]}
                    </p>
                    <button
                      className="text-base font-medium text-blue-600"
                      onClick={() => removeToCart(product.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            );
          }
        })}
        <div>
          <div>
            <h1>Cart Total</h1>
            <div>
              <div>
                <p>SubTotal</p>
                <p>${0}</p>
              </div>
              <hr />
              <div>
                <p>Shipping Charges</p>
                <p>Free</p>
              </div>
              <hr />
              <div>
                <h3>Total</h3>
                <h3>${0}</h3>
              </div>
            </div>
            <button>Check Out</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
