import React from "react";
import { FaSearch } from "react-icons/fa";
import "./navHeader.css";
import { Link } from "react-router-dom";
export default function NavHeader() {
  return (
    <div className="border-b-4 border-b-grey">
      <div className="container mx-auto flex items-center justify-between h-24  ">
        <Link to="/">
          <div>
            <img
              src="./images/logo/logo.png"
              alt="logo"
              className="w-full h-full"
            />
          </div>
        </Link>
        <div className="flex items-center space-x-3 text-white font-serif text-xl  navText">
          <p>Movies</p>
          <p>TV Shows</p>
          <p>Animaitons</p>
          <p>Plans</p>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <Link to="/search">
            <div className="flex items-center space-x-1">
              <FaSearch color="#f36f45" size={20} />
              <p className="text-orangeColor text-lg mb-0">Sreach...</p>
            </div>
          </Link>
          <button className="px-6 py-3 bg-orangeColor rounded-3xl text-white text-base navText">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}
