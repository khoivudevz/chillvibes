import React, { useState } from "react";
import { Modal, Button } from "antd";
import { BsFillPlayCircleFill } from "react-icons/bs";
import "./trailerModal.css";
import { tvServices } from "../../services/tvService";
import Player from "../Player/Player";
export default function TVShowsTrailerModal({ data }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [trailer, settrailer] = useState(null);

  const showModal = () => {
    setIsModalVisible(true);
    getTrailerTVShows();
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const getTrailerTVShows = () => {
    tvServices
      .getTrailerTVShows(data)
      .then((res) => {
        let trailerData = res.data.results;
        let trailerVideo = trailerData.filter((trailer) => {
          return trailer !== null
            ? trailer.type === "Trailer"
            : "https://www.youtube.com/watch?v=YICjBwhsFV0";
        });
        settrailer(trailerVideo);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <div id="trailerModal">
      <Button type="primary" onClick={showModal}>
        <div className="hover:text-orangeColor">
          <BsFillPlayCircleFill size={30} />
        </div>
      </Button>
      <Modal
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        destroyOnClose={true}
      >
        <div className="w-full">
          <Player
            videoUrl={
              trailer === null
                ? ""
                : `https://www.youtube.com/watch?v=${trailer[0]?.key}`
            }
          />
        </div>
      </Modal>
    </div>
  );
}
