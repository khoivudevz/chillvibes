import React, { useEffect, useState } from "react";
import { Pagination } from "antd";
import FavoriteItem from "./FavoriteItem";
import EmptyFavorite from "../../Components/EmptyFavorite/EmptyFavorite";

export default function MovieFavorite() {
  let localStorageData = localStorage.getItem("favoriteList");
  let favoriteListArr = JSON.parse(localStorageData);
  let [favoriteList, setfavoriteList] = useState(null);
  let [currentPage, setcurrentPage] = useState(1);
  let [postsPerPage, setpostsPerPage] = useState(12);
  let totalPages = Math.ceil(favoriteListArr?.length);
  useEffect(() => {
    let localStorageData = localStorage.getItem("favoriteList");
    setfavoriteList(JSON.parse(localStorageData));
  }, [favoriteList]);

  let indexOfLastPost = currentPage * postsPerPage;
  let indexOfFirstPost = indexOfLastPost - postsPerPage;
  let currentPosts = favoriteList?.slice(indexOfFirstPost, indexOfLastPost);
  let onChange = (page) => {
    setcurrentPage(page);
  };
  return favoriteList?.length !== 0 ? (
    <div className="container mx-auto my-28">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-20">
        {currentPosts?.map((item) => {
          return <FavoriteItem data={item} />;
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
  ) : (
    <EmptyFavorite />
  );
}
