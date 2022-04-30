import React from "react";
import ReactLoading from "react-loading";

export default function Loading() {
  return (
    <div className="fixed h-screen w-screen bg-grey flex items-center justify-center">
      <ReactLoading type="bars" color="#f36f45" />
    </div>
  );
}
