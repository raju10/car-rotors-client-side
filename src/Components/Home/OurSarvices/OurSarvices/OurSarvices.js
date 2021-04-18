import React, { useEffect, useState } from "react";
import serviceImg from "../../../../images/img_01.jpg";
import OurSarvicesDetails from "../OurSarvicesDetails/OurSarvicesDetails";

const OurSarvices = () => {
  const [servicesData, setProduct] = useState([]);
  useEffect(() => {
    fetch("https://warm-beach-20852.herokuapp.com/ourProduct")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <div>
      <div>
        <h2 style={{ textAlign: "center" }}>our awesome sarvices</h2>
      </div>
      <div className="d-flex justify-content-center mt-5 container">
        <div className="row ">
          {servicesData.map((srvsData) => (
            <OurSarvicesDetails srvsData={srvsData}></OurSarvicesDetails>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurSarvices;
