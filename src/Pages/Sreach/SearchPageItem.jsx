import React, { useEffect, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import { movieServices } from "../../services/movieService";

export default function SearchPageItem({ data }) {
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    movieServices
      .getDetails(data.id)
      .then((res) => {
        setMovie(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, [data]);

  return (
    <div>
      <Link to={`/details/${data.id}`}>
        <div className="flex items-center justify-center space-x-3 text-white hover:text-orangeColor transition-all">
          <div>
            <IoMdSearch size={15} />
          </div>
          <p className="mb-0 text-lg">{movie?.title}</p>
        </div>
      </Link>
    </div>
  );
}
