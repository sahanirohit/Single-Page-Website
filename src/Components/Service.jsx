import React from "react";
import Card from "./Card";
import Cdata from "./Cdata";

export default function Service() {
  return (
    <>
      <div id="service"></div>
      <div className="service__section">
        <div className="container">
          <div className="service__page">
            <div className="service__content">
              <div className="service__heading__content">
                <h1>My Awesome Service</h1>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration.
                </p>
              </div>
            </div>
            <div className="container-fluid">
              <div className="row gy-4">
                {Cdata.map((val, ind) => {
                  return (
                    <Card
                      key={ind}
                      icon={val.icon}
                      title={val.title}
                      content={val.content}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
