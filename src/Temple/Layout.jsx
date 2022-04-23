import React from "react";
import Footer from "../Components/Footer/Footer";
import NavHeader from "../Components/NavHeader/NavHeader";

export default function Layout({ Components }) {
  return (
    <>
      <NavHeader />
      <Components />
      <Footer />
    </>
  );
}
