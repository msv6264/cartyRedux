import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../Features/cartSlicer/cartSlice";

export default function Card({ img, id }) {
  const dispatch = useDispatch();
  const itemCount = useSelector((state) => state.countItems.items[id] || 0);

  const handleIncrement = (id) => dispatch(increment(id));
  const handleDecrement = (id) => dispatch(decrement(id));
  const handleReset = (id) => dispatch(reset(id));

  return (
    <div className="border border-red-300 p-4 flex flex-col items-center justify-between rounded-md shadow-md">
      {/* Product Image */}
      <img src={img} alt="Product" className="w-40 h-40 object-contain mb-4" />

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-[10px] mt-4">
        {itemCount === 0 ? (
          <button
            disabled={itemCount >= 4}
            onClick={() => handleIncrement(id)}
            className="bg-[#ffb3b3] w-[145px] h-[35px] text-black font-medium py-1 px-6 rounded-[12px]"
          >
            Add
          </button>
        ) : (
          <button className="bg-[#ffb3b3] w-[145px] h-[35px] text-black font-medium py-1 px-4 rounded-[12px] flex items-center gap-4">
            {/* minus items from cart */}
            <AiOutlineMinus
              onClick={() => handleDecrement(id)}
              className="text-2xl hover:bg-[#E15F5F] p-1 rounded-full"
            />

            {/* displaying no.of items */}
            <div className="text-base bg-white p-3">{itemCount}</div>

            {/* adding one item */}
            <AiOutlinePlus
              onClick={() => handleIncrement(id)}
              className="text-2xl hover:bg-[#E15F5F] p-1 rounded-full"
            />
          </button>
        )}

        {/* removing whole items */}
        <button
          onClick={() => handleReset(id)}
          disabled={itemCount === 0}
          className={`bg-[#ffb3b3] text-black font-medium py-1 px-6 rounded-[12px] ${
            itemCount === 0 ? "opacity-70" : "hover:bg-[#ff9e9e]"
          } `}
        >
          Remove from cart
        </button>
      </div>
    </div>
  );
}
