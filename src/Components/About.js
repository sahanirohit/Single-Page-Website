import React from "react";

export default function About() {
  return (
    <>
      <div className="container">
        <div className="about_page">
          <h1 className="about">ABOUT</h1>
          <div className="row">
            <div className="col-6">
              <div className="about__img">
                <img src="/images/me.png" alt="me" />
              </div>
            </div>
            <div className="col-6">
              <div className="about_heading">
                <h1>
                  Hello, I'm <span className="my_name">Rohit</span> Welcome to
                  my World.
                </h1>
              </div>
              <div className="react-tabs">
                <ul class="nav" id="myTab" role="tablist">
                  <li class="nav-item" role="presentation">
                    <a
                      href="/"
                      className="nav-link active_tabs"
                      id="skills-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#skills"
                      role="tab"
                      aria-controls="skills"
                      aria-selected="false">
                      Main skills
                    </a>
                  </li>
                  <li class="nav-item" role="presentation">
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
                  <li class="nav-item" role="presentation">
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
                <div class="tab-content" id="myTabContent">
                  <div
                    class="tab-pane fade show active"
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
                    class="tab-pane fade"
                    id="awards"
                    role="tabpanel"
                    aria-labelledby="awards-tab">
                    Awards
                  </div>
                  <div
                    class="tab-pane fade"
                    id="experience"
                    role="tabpanel"
                    aria-labelledby="experience-tab">
                    Experience
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
