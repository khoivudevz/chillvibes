import React, { useState } from "react";
import { Modal, Button } from "antd";
import { BsFillPlayCircleFill } from "react-icons/bs";
import ReactPlayer from "react-player";
import "./trailerModal.css";
import { movieServices } from "../../services/movieService";

export default function TrailerModal({ data }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [trailer, settrailer] = useState(null);

  const showModal = () => {
    setIsModalVisible(true);
    getTrailerMovie();
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const getTrailerMovie = () => {
    movieServices
      .getTrailerMovie(data)
      .then((res) => {
        let trailerData = res.data.results;
        let trailerVideo = trailerData.filter((trailer) => {
          return trailer.type === "Trailer";
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
        <BsFillPlayCircleFill size={30} />
      </Button>
      <Modal
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        destroyOnClose={true}
      >
        <ReactPlayer
          url={
            trailer === null
              ? ""
              : `https://www.youtube.com/watch?v=${trailer[0].key}`
          }
        />
      </Modal>
    </div>
  );
}
