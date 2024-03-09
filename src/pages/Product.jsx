import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcurms from "../Component/Breadcurms/Breadcurms";
import ProductDisplay from "../Component/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Component/DescriptionBox/DescriptionBox";
import RelatedProduct from "../Component/RelatedProduct/RelatedProduct";

export const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <div className="container m-auto ">
      <Breadcurms product={product} />
      <div style={{ height: "70vh" }}>
        <ProductDisplay product={product} />
      </div>
      <DescriptionBox />
      <RelatedProduct />
    </div>
  );
};
