import React from "react";

export default function Contact() {
  return (
    <>
      <div id="contact"></div>
      <div className="container">
        <div className="contact__page">
          <div className="contact__section">
            <div className="row">
              <div className="col-lg-6 col-10 mx-auto">
                <div className="contact__heading__content">
                  <h1>Hire Me.</h1>
                  <span>
                    I am available for freelance work. Connect with me via
                    phone:
                  </span>
                  <br />
                  <span>
                    <strong> 01923088574</strong> for email:
                    <strong> admin@example.com</strong>
                  </span>
                </div>
                <form>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name *"
                    />
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your email *"
                    />
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Write a Subject"
                    />
                    <textarea
                      name="message"
                      id="message"
                      cols="30"
                      rows="5"
                      className="form-control"
                      placeholder="Message"
                    />
                  </div>
                  <button type="submit" className="btn contact__btn">
                    Submit
                  </button>
                </form>
              </div>
              <div className="col-lg-6 col-10 mx-auto">
                <img
                  src="/images/me.png"
                  alt="me"
                  className="img-fluid contact__img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
