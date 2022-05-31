import React from "react";
import { AiFillFacebook, AiFillInstagram, AiFillMail } from "react-icons/ai";
import "./footer.css";
export default function Footer() {
  return (
    <div className="border-t-4 border-t-grey">
      <div className="container mx-auto ">
        <div className="flex items-center justify-between  h-44 ">
          <div>
            <img
              src="./images/logo/logo.png"
              alt="logo"
              className="h-[70px] object-cover"
            />
          </div>
          <div id="footerText">
            <p className="text-white">
              Chill Vibes - Webiste was created by
              <a
                className="ml-1 text-orangeColor"
                href="https://www.facebook.com/itsjinhk/"
                target="_blank"
              >
                KhoiVuDev
              </a>
              .
            </p>
            <div className="flex items-center space-x-4">
              <a href="https://www.facebook.com/itsjinhk/" target="_blank">
                <AiFillFacebook color="orange" size={35} />
              </a>
              <a href="https://www.instagram.com/itsjinhk/" target="_blank">
                <AiFillInstagram color="orange" size={35} />
              </a>
              <a href="mailto:itsjinhk@gmail.com" target="_blank">
                <AiFillMail color="orange" size={35} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
