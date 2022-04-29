import React, { useEffect, useState } from "react";
import { Pagination } from "antd";
import FavoriteItem from "./FavoriteItem";

export default function Favorite() {
  let [currentPage, setcurrentPage] = useState(1);
  let [postsPerPage, setpostsPerPage] = useState(12);
  let localStorageData = localStorage.getItem("localStorage");
  let favoriteListArr = JSON.parse(localStorageData);
  let totalPages = Math.ceil(favoriteListArr?.length);
  console.log("totalPages", totalPages);
  let [favoriteList, setfavoriteList] = useState(null);
  useEffect(() => {
    let localStorageData = localStorage.getItem("localStorage");
    setfavoriteList(JSON.parse(localStorageData));
  }, [favoriteList]);

  let indexOfLastPost = currentPage * postsPerPage;
  let indexOfFirstPost = indexOfLastPost - postsPerPage;
  let currentPosts = favoriteList?.slice(indexOfFirstPost, indexOfLastPost);
  let onChange = (page) => {
    setcurrentPage(page);
  };
  return (
    <div className="container mx-auto my-32">
      <p className="movieNameFont text-white text-3xl">Favorite List</p>

      <div className="grid grid-cols-3 gap-20">
        {currentPosts?.map((item) => {
          return <FavoriteItem data={item.payload} />;
        })}
      </div>

      <div className="flex items-center justify-center my-40">
        <Pagination
          defaultCurrent={currentPage}
          pageSize={postsPerPage}
          onChange={onChange}
          total={totalPages}
        />
      </div>
      <div className="mb-96"></div>
    </div>
  );
}
