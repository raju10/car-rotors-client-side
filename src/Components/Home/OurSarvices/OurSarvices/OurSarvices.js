import React, { useEffect, useState } from "react";
import serviceImg from "../../../../images/img_01.jpg";
import OurSarvicesDetails from "../OurSarvicesDetails/OurSarvicesDetails";
const servicesDatas = [
  {
    title: "2015 Shevrolet Corvette Stingray Z51",
    img: serviceImg,
    dayPrice: "$230/Day",
    carPrice: "$10,000",
  },
  {
    title: "2015 Shevrolet Corvette Stingray Z51",
    img: serviceImg,
    dayPrice: "$230/Day",
    carPrice: "$10,000",
  },
  {
    title: "2015 Shevrolet Corvette Stingray Z51",
    img: serviceImg,
    dayPrice: "$230/Day",
    carPrice: "$10,000",
  },
];

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
        <h2>our awesome sarvices</h2>
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
