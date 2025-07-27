import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../Features/cartSlicer/cartSlice";

export default function CardinCart({ img, id }) {
  const dispatch = useDispatch();
  const itemCount = useSelector((state) => state.countItems.items[id] || 0);

  const handleIncrement = () => dispatch(increment(id));
  const handleDecrement = () => dispatch(decrement(id));

  if (itemCount === 0) return null;

  return (
    <div className="border border-red-300 m-16 p-4 flex flex-col items-center justify-between rounded-md shadow-md">
      <img src={img} alt="Product" className="w-40 h-40 object-contain mb-4" />

      <div className="flex flex-col sm:flex-row gap-[10px] mt-4">
        <button className="bg-[#ffb3b3] w-[145px] h-[35px] text-black font-medium py-1 px-4 rounded-[12px] flex items-center gap-4">
          <AiOutlineMinus
            onClick={handleDecrement}
            className="text-2xl hover:bg-[#E15F5F] p-1 rounded-full"
          />
          <div className="text-base bg-white p-3">{itemCount}</div>
          <AiOutlinePlus
            onClick={handleIncrement}
            className="text-2xl hover:bg-[#E15F5F] p-1 rounded-full"
          />
        </button>
      </div>
    </div>
  );
}
