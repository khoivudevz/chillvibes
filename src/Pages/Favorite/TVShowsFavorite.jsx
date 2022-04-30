import React, { useEffect, useState } from "react";
import { Pagination } from "antd";
import TVShowsFavoriteItem from "./TVShowsFavoriteItem";

export default function TVShowsFavorite() {
  let [currentPage, setcurrentPage] = useState(1);
  let [postsPerPage, setpostsPerPage] = useState(12);
  let localStorageData = localStorage.getItem("tvShowBookmarks");
  let favoriteListArr = JSON.parse(localStorageData);
  let totalPages = Math.ceil(favoriteListArr?.length);
  let [favoriteList, setfavoriteList] = useState(null);
  useEffect(() => {
    let localStorageData = localStorage.getItem("tvShowBookmarks");
    setfavoriteList(JSON.parse(localStorageData));
  }, [favoriteList]);

  let indexOfLastPost = currentPage * postsPerPage;
  let indexOfFirstPost = indexOfLastPost - postsPerPage;
  let currentPosts = favoriteList?.slice(indexOfFirstPost, indexOfLastPost);
  let onChange = (page) => {
    setcurrentPage(page);
  };
  return (
    <div className="container mx-auto my-28">
      <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-20">
        {currentPosts?.map((item) => {
          return <TVShowsFavoriteItem data={item} />;
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
