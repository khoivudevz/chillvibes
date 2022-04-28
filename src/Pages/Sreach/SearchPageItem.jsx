import React from "react";
import { IoMdSearch } from "react-icons/io";
import { Link } from "react-router-dom";

export default function SearchPageItem({ data }) {
  return (
    <Link to={`/details/${data.id}`}>
      <div className="flex items-center justify-center space-x-3">
        <div>
          <IoMdSearch color="white" size={15} />
        </div>
        <p className="mb-0 text-white text-lg">{data.name}</p>
      </div>
    </Link>
  );
}
