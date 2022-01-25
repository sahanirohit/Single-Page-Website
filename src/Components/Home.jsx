import React from "react";
import { NavLink } from "react-router-dom";
import { FaPlay } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="home__page">
          <div className="home__content">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12 mx-auto content">
                <h1 className="home__heading">
                  Grow your Business with
                  <span className="brand-name"> RKH Digital</span>
                </h1>
                <p className="home__p">
                  India's Leading Digital Media Agency. Proven Methodology,
                  Increase Leads & Sales. Creative Web Design & Development
                  Company In Ahmedabad & Bhavnagar, India. Webdesign. Custom
                  Development. Responsive Website.
                </p>
                <div className="home__button">
                  <a href="#service" className="btn home__btn get-started">
                    Get Started
                  </a>
                  <a href="#blogs" className="btn home__btn youtube">
                    Blogs <FaPlay />
                  </a>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12 mx-auto home_img">
                <img
                  src="/images/bg.jpg"
                  alt="background"
                  height="550px"
                  width="600px"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
