import React, { useEffect, useState } from "react";
import { Pagination } from "antd";
import MovieItem from "../../Components/MovieItem/MovieItem";
import { movieServices } from "../../services/movieService";
import { useDispatch, useSelector } from "react-redux";
import { removeLoading, setLoading } from "../../redux/loadingSlice";
import Loading from "../../Components/Loading/Loading";

export default function SeeAllUpComing() {
  let [page, setpage] = useState(1);
  let [data, setdata] = useState(null);
  let [total, settotal] = useState(null);
  let loading = useSelector((state) => state.loadingSlice.isLoading);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading());
    movieServices
      .getUpComingMoviePage(page)
      .then((res) => {
        setdata(res.data.results);
        settotal(res.data.total_results);
        dispatch(removeLoading());
      })
      .catch((err) => {
        console.log("err", err);
        dispatch(removeLoading());
      });
  }, [page]);
  let onChange = (pageChange) => {
    setpage(pageChange);
  };
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="container mx-auto my-20">
          <p className="movieNameFont text-white text-5xl">Up coming</p>
          <div className="grid grid-cols-3 gap-20">
            {data?.map((item) => {
              return <MovieItem data={item} />;
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
      )}
    </>
  );
}
