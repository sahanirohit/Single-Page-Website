import React from "react";
import {
  FaFacebook,
  FaGooglePlus,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="container-fluid bg-footer">
        <div className="container">
          <div className="footer__page">
            <div className="row footer">
              <div className="col-lg-6 col-10 ">
                <h1>Foolish Developer</h1>
                <span>
                  Foolish Developer is a blog website where you will find great
                  tutorials on web design and development. Here each tutorial is
                  beautifully described step by step with the required source
                  code.
                </span>
                <div className="footer_social_icons">
                  <FaFacebook className="footer__icons" />
                  <FaTwitter className="footer__icons" />
                  <FaGooglePlus className="footer__icons" />
                  <FaYoutube className="footer__icons" />
                  <FaLinkedin className="footer__icons" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
