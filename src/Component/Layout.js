import React from "react";
import "./Card-style.css";

const Layout = (props) => {
  return (
    <div className="card text-center">
      <div className="overflow">
        <img src={props.imgsrc} alt="profile" className="card-img-top" />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text text-secondary">
          Skill: 15
          <br />
          Patience: 16
          <br />
          Time : 10 <br />
          Availability: 12
          <br />
          Conversational Skills: 18
        </p>
        <a href="#root" className="btn btn-outline-success">
          Rate
        </a>
      </div>
    </div>
  );
};
export default Layout;
