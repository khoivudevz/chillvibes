import React, { useEffect, useState } from "react";
import MovieItem from "../../Components/MovieItem/MovieItem";
import { Pagination } from "antd";
import { movieServices } from "../../services/movieService";
import "../../Components/MovieItem/movieItem.css";
import { useDispatch, useSelector } from "react-redux";
import { removeLoading, setLoading } from "../../redux/loadingSlice";
import Loading from "../../Components/Loading/Loading";

export default function SeeAllNowPlaying() {
  let [page, setpage] = useState(1);
  let [data, setdata] = useState(null);
  let [total, settotal] = useState(null);
  let loading = useSelector((state) => state.loadingSlice.isLoading);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading());
    movieServices
      .getNowPlayingMoviePage(page)
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
          <p className="movieNameFont text-white text-3xl">Now playing</p>
          <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-20">
            {data?.map((item) => {
              return <MovieItem data={item} />;
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
      )}
    </>
  );
}
