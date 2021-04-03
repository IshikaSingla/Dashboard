import React, { Component } from "react";
import Layout from "./Layout";
import image1 from "../images/profile1.jpg";
import image2 from "../images/profile2.jpg";
import image3 from "../images/profile3.jpg";

class Cards extends Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-4">
            <Layout imgsrc={image1} title="Aditya Singh" />
          </div>
          <div className="col-md-4">
            <Layout imgsrc={image2} title="Ishika Singla" />
          </div>
          <div className="col-md-4">
            <Layout imgsrc={image3} title="Siddhartha Sankar" />
          </div>
        </div>
      </div>
    );
  }
}
export default Cards;
