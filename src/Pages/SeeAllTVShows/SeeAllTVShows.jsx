import React, { useEffect, useState } from "react";
import { Pagination } from "antd";
import "../../Components/MovieItem/movieItem.css";
import { tvServices } from "../../services/tvService";
import TvShowsItem from "../../Components/MovieItem/TvShowsItem";

export default function SeeAllTVShows() {
  let [page, setpage] = useState(1);
  let [data, setdata] = useState(null);
  let [total, settotal] = useState(null);
  useEffect(() => {
    tvServices
      .getTopRatedTVShowsPage(page)
      .then((res) => {
        setdata(res.data.results);
        settotal(res.data.total_results);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, [page]);
  let onChange = (pageChange) => {
    setpage(pageChange);
  };
  return (
    <div className="container mx-auto my-20">
      <p className="movieNameFont text-white text-3xl">TV SHOWS</p>
      <div className="grid grid-cols-3 gap-20">
        {data?.map((item) => {
          return <TvShowsItem data={item} />;
        })}
      </div>
      <div className="flex items-center justify-center my-20">
        <Pagination
          defaultCurrent={1}
          pageSize={20}
          total={total}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
