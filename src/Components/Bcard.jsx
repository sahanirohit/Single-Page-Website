import React from "react";

export default function Bcard(props) {
  return (
    <>
      <div className="col-lg-4 col-10 mx-auto">
        <div className="card shadow">
          <img
            height="250px"
            src={props.imgsrc}
            className="card-img-top"
            alt={props.imgsrc}
          />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <span className="card-text">{props.content}</span>
            <br />
            <br />
            <a href="" className="btn btn-primary">
              Read more
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
