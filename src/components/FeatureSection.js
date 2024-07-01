import React from "react";
import FeatureImageTop from "./Images/featureImageTop.png";
import FeatureImageBottom from "./Images/featureImageBottom.png";
import "./CSS/FeatureSection.css";

const FeatureSection = (props) => {
  return (
    <>
      <div className="feature-section">
        <div className="feature-section-top">
          <h1>{props.name}</h1>
          <img src={FeatureImageTop} alt="" />
        </div>
        <img className="feature-section-image-bottom" src={FeatureImageBottom} alt="" />
      </div>
    </>
  );
};

export default FeatureSection;
