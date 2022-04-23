import React from "react";
import { Input, Space } from "antd";
import "./searchBar.css";

const { Search } = Input;

const onSearch = (value) => console.log(value);

export default function SearchBar() {
  return (
    <Space direction="vertical">
      <Search placeholder="input search text" onSearch={onSearch} enterButton />
    </Space>
  );
}