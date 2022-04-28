import React from "react";
import { Comment, Avatar } from "antd";
import moment from "moment";
import "./userCmt.css";

export default function UsersCmt({ data }) {
  return (
    <div className="bg-orangeColor h-44 text-white  overflow-y-scroll rounded-3xl p-y px-4">
      <Comment
        author={
          <p className="mb-0 text-xl movieNameFont ">
            {data?.author_details?.username}
          </p>
        }
        content={<p className="overviewFont mb-0">{data?.content}</p>}
        datetime={moment(data?.created_at).format("MMMM dd, yyyy")}
      />
    </div>
  );
}
