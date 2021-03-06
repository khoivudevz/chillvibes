import React from "react";
import { FaSearch } from "react-icons/fa";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import "./navHeader.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export default function NavHeader() {
  let movieFavoriteValue = useSelector(
    (state) => state.favoriteListSlice.value
  );
  let TVShowsFavoriteValue = useSelector(
    (state) => state.tvShowBookMarksSlice.value
  );
  let favoriteValue = movieFavoriteValue + TVShowsFavoriteValue;
  return (
    <div className="border-b-4 border-b-grey">
      <div className="container mx-auto flex items-center justify-between h-24  ">
        <Link to="/">
          <div>
            <img
              src="./images/logo/logo.png"
              alt="logo"
              className="object-cover"
            />
          </div>
        </Link>

        <div className="flex items-center justify-center space-x-4 ">
          <Link to="/search">
            <div className="items-center text-white hover:text-orangeColor transition-all space-x-1 hidden md:flex">
              <FaSearch size={20} />
              <p className=" text-lg mb-0">Sreach...</p>
            </div>
          </Link>
          <Link to="/favorite">
            <div className="relative px-4 py-3 bg-orangeColor rounded-3xl text-white text-base navText hover:bg-white hover:text-orangeColor transition-all">
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
