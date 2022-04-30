import React from "react";
import { Tabs } from "antd";
import "./favorite.css";
import MovieFavorite from "./MovieFavorite";
import TVShowsFavorite from "./TVShowsFavorite";
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}
export default function Favorite() {
  return (
    <div className="container mx-auto">
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane
          tab={<p className="text-white text-3xl mb-0 movieNameFont">Movie</p>}
          key="1"
        >
          <MovieFavorite />
        </TabPane>
        <TabPane
          tab={
            <p className="text-white text-3xl mb-0 movieNameFont">TV SHOWS</p>
          }
          key="2"
        >
          <TVShowsFavorite />
        </TabPane>
      </Tabs>
    </div>
  );
}
