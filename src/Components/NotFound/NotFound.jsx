import React from "react";
import { BiErrorCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center text-white space-y-5">
      <p>
        <BiErrorCircle size={70} />
      </p>
      <p className="text-4xl">404</p>
      <p>Đường dẫn không hợp lệ!</p>
      <Link to="/">
        <button className="px-4 py-4 bg-orangeColor rounded-2xl">
          Đi tới trang chủ!
        </button>
      </Link>
    </div>
  );
}
