import React from "react";

const DescriptionBox = () => {
  return (
    <div className="flex flex-col my-6">
      <div className="flex ">
        <div className="p-4 mr-3 border border-gray-300 bg-gray-200">Description</div>
        <div className="p-4 mr-3 border border-gray-300 bg-gray-200">Review (145)</div>
      </div>
      <div>
        <p className="font-medium my-3 w-3/4">
          Welcome to ShopEase, the premier e-commerce app that revolutionizes
          the way you shop, bringing convenience, style, and savings right to
          your fingertips. Whether you're a trendsetter, a savvy shopper, or
          someone looking for everyday essentials, ShopEase caters to all your
          needs with a seamless and personalized shopping experience.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
