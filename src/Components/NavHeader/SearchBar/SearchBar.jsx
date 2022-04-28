import React from "react";
import { Input, Space } from "antd";
import "./searchBar.css";
import { useDispatch } from "react-redux";
import { setsearchData } from "../../../redux/searchSlice";

const { Search } = Input;

export default function SearchBar() {
  let dispatch = useDispatch();

  const customOnChange = (e) => {
    dispatch(setsearchData(e.target.value));
  };

  return (
    <Space direction="vertical" className="w-1/2 rounded-xl">
      <Search
        placeholder="search..."
        onChange={customOnChange}
        size="large"
        enterButton
      />
    </Space>
  );
}
