import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./AboutDetails.css";
const AboutDetails = ({ info }) => {
  return (
    <div className=" col-md-4 info-card">
      <div
        className={`d-flex justify-content-center info-${info.backgroung} info-container`}
      >
        <div>
          <FontAwesomeIcon
            icon={info.icon}
            className="info-icon mr-3"
          ></FontAwesomeIcon>
        </div>
        <div>
          <h4>{info.title}</h4>
          <small>{info.text}</small>
        </div>
      </div>
    </div>
  );
};

export default AboutDetails;
