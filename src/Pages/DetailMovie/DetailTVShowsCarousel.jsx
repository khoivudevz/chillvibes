import React from "react";
import Slider from "react-slick";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { BsStarFill } from "react-icons/bs";
import { CgMoreO } from "react-icons/cg";
import { tvServices } from "../../services/tvService";
import TVShowsTrailerModal from "../../Components/TrailerModal/TVShowsTrailerModal";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./detailMovieCarousel.css";
import "../../Components/MovieItem/movieItem.css";

export default function DetailTVShowsCarousel({ data }) {
  console.log("data", data);
  let navigate = useNavigate();
  let settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  const goToDetail = (id) => {
    navigate(`/details/${id}`);
    window.location.reload();
  };

  return (
    <Slider {...settings}>
      <div></div>
    </Slider>
  );
}
