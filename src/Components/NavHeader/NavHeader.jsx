import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import "./navHeader.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export default function NavHeader() {
  let movieFavoriteValue = useSelector(
    (state) => state.favoriteListSlice.value
  );
  console.log("movieFavoriteValue", movieFavoriteValue);
  let TVShowsFavoriteValue = useSelector(
    (state) => state.tvShowBookMarksSlice.value
  );
  console.log("TVShowsFavoriteValue", TVShowsFavoriteValue);
  let favoriteValue = movieFavoriteValue + TVShowsFavoriteValue;
  console.log("favoriteValue", favoriteValue);
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
          <Link to="/favorite">
            <div className="relative px-4 py-3 bg-orangeColor rounded-3xl text-white text-base navText hover:bg-white hover:text-orangeColor">
              <div>
                <BsFillBookmarkHeartFill size={30} />
              </div>
              {favoriteValue > 0 ? (
                <div className="w-6 h-6 bg-white text-orangeColor rounded-full flex items-center justify-center absolute -top-3 right-0">
                  {favoriteValue}
                </div>
              ) : (
                <></>
              )}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
