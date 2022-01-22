import React from "react";
import Bdata from "./Bdata";
import Bcard from "./Bcard";

export default function Blogs() {
  return (
    <>
      <div id="blogs"></div>
      <div className="blogs__section">
        <div className="container">
          <div className="blogs__page">
            <div className="blogs__content">
              <div className="blogs__heading__content">
                <h1>Latest News</h1>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration.
                </p>
              </div>
              <div className="container-fluid px-4">
                <div className="row gy-4">
                  {Bdata.map((val, ind) => {
                    return (
                      <Bcard
                        key={ind}
                        imgsrc={val.imgsrc}
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
      </div>
    </>
  );
}
