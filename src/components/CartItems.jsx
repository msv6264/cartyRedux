import React from "react";
import { useSelector } from "react-redux";
import productData from "../data/productData";
import CardinCart from "./CardinCart";

export default function CartItems() {
  const items = useSelector((state) => state.countItems.items || {});
  const reqItems = Object.entries(items).filter(
    ([_, quantity]) => quantity > 0
  );

  return (
    <div className="flex flex-wrap justify-center gap-16 mt-6">
      {reqItems.map(([id, quantity]) => {
        const product = productData.find((p) => p.id === id);
        return <CardinCart key={id} id={product.id} img={product.image} />;
      })}
    </div>
  );
}
