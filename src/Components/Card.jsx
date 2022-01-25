import React from "react";

export default function Card(props) {
  return (
    <>
      <div className="col-lg-4 col-10 mx-auto">
        <div className="card service__card">
          <div className="card-body">
            {props.icon}
            <h5 className="card-title">{props.title}</h5>
            <span className="card-text">{props.content}</span>
          </div>
        </div>
      </div>
    </>
  );
}
