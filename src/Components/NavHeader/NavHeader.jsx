import React from "react";
import "./navHeader.css";
import SearchBar from "../NavHeader/SearchBar/SearchBar";
export default function NavHeader() {
  return (
    <div className="border-b-4 border-b-grey">
      <div className="container mx-auto flex items-center justify-between h-24  ">
        <div>
          <img
            src="./images/logo/logo.png"
            alt="logo"
            className="w-full h-full"
          />
        </div>
        <div className="flex items-center space-x-3 text-white font-serif text-xl  navText">
          <p>Movies</p>
          <p>TV Shows</p>
          <p>Animaitons</p>
          <p>Plans</p>
        </div>
        <div className="flex items-center justify-center space-x-3">
          <div>
            <SearchBar />
          </div>
          <button className="px-6 py-3 bg-orangeColor rounded-3xl text-white text-base navText">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}
