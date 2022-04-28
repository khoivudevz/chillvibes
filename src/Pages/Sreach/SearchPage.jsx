import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Pagination } from "antd";
import SearchBar from "../../Components/NavHeader/SearchBar/SearchBar";
import { movieServices } from "../../services/movieService";
import SearchPageItem from "./SearchPageItem";

export default function SearchPage() {
  let keyWords = useSelector((state) => state.searchSlice.data);
  let [page, setpage] = useState(1);
  let [data, setdata] = useState(null);
  let [total, settotal] = useState(null);
  useEffect(() => {
    movieServices
      .getsearchMovie(page, keyWords)
      .then((res) => {
        setdata(res.data.results);
        settotal(res.data.total_results);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, [page, keyWords]);
  let onChange = (pageChange) => {
    setpage(pageChange);
  };
  return (
    <div className="h-screen my-20">
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <SearchBar />
        </div>

        <div className="space-y-2">
          {data?.map((item) => {
            return <SearchPageItem data={item} />;
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
    </div>
  );
}
