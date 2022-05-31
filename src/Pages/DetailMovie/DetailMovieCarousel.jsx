import React from "react";
import Slider from "react-slick";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { BsStarFill } from "react-icons/bs";
import { CgMoreO } from "react-icons/cg";
import { movieServices } from "../../services/movieService";
import TrailerModal from "../../Components/TrailerModal/TrailerModal";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./detailMovieCarousel.css";
import "../../Components/MovieItem/movieItem.css";

export default function DetailMovieCarousel({ data }) {
  let navigate = useNavigate();
  let settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
    ],
  };
  const goToDetails = (id) => {
    navigate(`/details/${id}`);
    window.location.reload();
  };
  return (
    <Slider {...settings}>
      {data?.map((movie) => {
        return (
          <div className="w-96 h-56 rounded-3xl overflow-hidden px-5">
            <div className="w-full h-full relative rounded-3xl overflow-hidden">
              <img
                src={movieServices?.getImageBig(movie?.backdrop_path)}
                alt="image"
                className="object-cover "
              />
              <div
                onClick={() => {
                  goToDetails(movie?.id);
                }}
                className="text-white hover:text-orangeColor"
              >
                <div>
                  <CgMoreO
                    className="absolute top-5 right-3 cursor-pointer "
                    size={25}
                  />
                </div>
              </div>
              <div className="w-full h-1/4 absolute bottom-0 backdrop-blur-sm bg-white/30 flex items-center justify-between px-5 titleFont">
                <div className="flex items-center justify-between space-x-2 ">
                  <TrailerModal data={movie?.id} />
                  <div className="cursor-default">
                    <p className="mb-0 text-white">{movie.title}</p>
                    <p className="mb-0 text-white">
                      {moment(movie?.release_date).format("MMMM YYYY")}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-2 border-l-2 border-l-white/50 pl-7 ">
                  <div>
                    <BsStarFill size={20} color="white" />
                  </div>
                  <div className="text-white">
                    {Math.round(movie?.vote_average * 100) / 100}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
  );
}
