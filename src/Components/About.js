import React from "react";

export default function About() {
  return (
    <>
      <div id="about"></div>
      <div className="about__section">
        <div className="container">
          <div className="about_page">
            <h1 className="about">ABOUT</h1>
            <div className="row">
              <div className="col-lg-6 col-10 mx-auto">
                <div className="about__img">
                  <img src="/images/me.png" alt="me" />
                </div>
              </div>
              <div className="col-lg-6 col-10 mx-auto">
                <div className="about_heading">
                  <h1>
                    Hello, I'm <span className="my_name">Rohit</span> Welcome to
                    my World.
                  </h1>
                </div>
                <div className="react-tabs">
                  <ul className="nav" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <a
                        href="/"
                        className="nav-link"
                        id="skills-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#skills"
                        role="tab"
                        aria-controls="skills"
                        aria-selected="false">
                        Main skills
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        href="/"
                        className="nav-link"
                        id="awards-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#awards"
                        role="tab"
                        aria-controls="awards"
                        aria-selected="false">
                        Awards
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        href="/"
                        className="nav-link"
                        id="experience-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#experience"
                        role="tab"
                        aria-controls="experience"
                        aria-selected="false">
                        Experience
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content" id="myTabContent">
                    <div
                      className="tab-pane fade show active"
                      id="skills"
                      role="tabpanel"
                      aria-labelledby="skills-tab">
                      <div className="showcase">
                        <h5>User experience design - UI/UX</h5>
                        <span>Delight the user and make it work.</span>
                      </div>
                      <div className="showcase">
                        <h5>Web and user interface design - Development</h5>
                        <span>Websites, web experiences</span>
                      </div>
                      <div className="showcase">
                        <h5>Interaction design - Animation</h5>
                        <span>I like to move it move it.</span>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="awards"
                      role="tabpanel"
                      aria-labelledby="awards-tab">
                      <div className="showcase">
                        <h5>Awwwards.com - Winner</h5>
                        <span>2019 - 2020</span>
                      </div>
                      <div className="showcase">
                        <h5>CSS Design Awards - Winner</h5>
                        <span>2017 - 2018</span>
                      </div>
                      <div className="showcase">
                        <h5>Design nominees - site of the day</h5>
                        <span>2013 - 2014</span>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="experience"
                      role="tabpanel"
                      aria-labelledby="experience-tab">
                      <div className="showcase">
                        <h5>Sr. Front-End Engineer - Google</h5>
                        <span>2018 - Current</span>
                      </div>
                      <div className="showcase">
                        <h5>Front-end Engineer - Microsoft</h5>
                        <span>2017 - 2018</span>
                      </div>
                      <div className="showcase">
                        <h5>Software Engineer - Alibaba</h5>
                        <span>2013 - 2014</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
