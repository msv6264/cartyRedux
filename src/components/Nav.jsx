import React from 'react';
import cartIcon from '../assets/cart.png';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  const items = useSelector((state) => state.countItems.items || {});
  const totalItems = Object.values(items).reduce((sum, val) => sum + val, 0);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/CartItems');
  };

  const goToHome = () => {
    navigate('/');
  };

  return (
    <div className="flex items-center justify-between bg-[#ffb3b3] w-full h-[70px] relative">
      <div className="font-semibold ml-12 text-2xl cursor-pointer" onClick={goToHome}>CARTY SHOP</div>

      <div className="relative cursor-pointer mr-12" onClick={handleClick}>
        <img src={cartIcon} alt="Cart" className="w-[35px]" />
        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full px-[6px] py-[2px]">
          {totalItems}
        </span>
      </div>
    </div>
  );
}
