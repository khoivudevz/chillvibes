import React, { useEffect, useState } from "react";
import { Pagination } from "antd";
import { movieServices } from "../../services/movieService";
import SearchPageItem from "./SearchPageItem";

export default function SearchPage() {
  let [keywords, setKeywords] = useState(null);
  let [page, setpage] = useState(1);
  let [data, setdata] = useState(null);
  let [total, settotal] = useState(null);
  console.log("data", data);
  useEffect(() => {
    if (keywords != null) {
      movieServices
        .getsearchMovie(page, keywords)
        .then((res) => {
          setdata(res.data.results);
          settotal(res.data.total_results);
        })
        .catch((err) => {
          console.log("err", err);
        });
    }
  }, [page, keywords]);
  const onChange = (pageChange) => {
    setpage(pageChange);
  };

  const handleInputValueChange = (e) => {
    setKeywords(e.target.value);
  };

  return (
    <div className="h-screen my-20">
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <input
            type="text"
            className="w-1/2 h-[30px] pl-10"
            placeholder="Search for a movie, tv show,... "
            onChange={(e) => {
              handleInputValueChange(e);
            }}
          />
        </div>
        <div className="space-y-2">
          {data?.map((item) => {
            return <SearchPageItem data={item} />;
          })}
        </div>
        <div className="flex items-center justify-center my-20">
          <Pagination
            defaultCurrent={page}
            pageSize={20}
            total={total}
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
}
