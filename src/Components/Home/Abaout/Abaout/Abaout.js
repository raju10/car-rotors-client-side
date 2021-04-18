import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarker,
  faClock,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import AboutDetails from "../AboutDetails/AboutDetails";
const aboutData = [
  {
    icon: faClock,
    title: "Secured Payment Guarantee",
    text: "Vestibulum at ultrices elit. Maecenas faucibus vulputate vestibulum",
  },
  {
    icon: faMapMarker,
    title: "Secured Payment Guarantee",
    text: "Vestibulum at ultrices elit. Maecenas faucibus vulputate vestibulum",
  },
  {
    icon: faPhone,
    title: "Secured Payment Guarantee",
    text: "Vestibulum at ultrices elit. Maecenas faucibus vulputate vestibulum",
  },
];
const Abaout = () => {
  return (
    <section>
      <h4
        style={{
          textAlign: "center",
          paddingTop: "60px ",
          paddingBottom: "30px",
        }}
      >
        About Us
      </h4>
      <div className="d-flex justify-content-center">
        <div className="row w-75">
          {aboutData.map((info) => (
            <AboutDetails info={info}></AboutDetails>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Abaout;
