import React from "react";

const TestimonialDetails = (props) => {
  const { email, photo, name } = props.review;
  const { myName, cName, description } = props.review.data;
  return (
    <div className="col-md-4 mt-5">
      <div style={{ border: "1px solid green", padding: "10px 15px" }}>
        <div className="d-flex align-items-center ">
          <div className="  mr-3">
            <img
              src={photo}
              alt=""
              className="w-100"
              style={{ borderRadius: "100%" }}
            />
          </div>
          <div>
            <span>{myName}</span>
            <br />
            <small style={{ color: "green", fontWeight: "500" }}>{cName}</small>
            <br />
            <small className="text-secondary">{email}</small>
          </div>
        </div>
        <p className="pt-3" style={{ color: "#555" }}>
          {" "}
          {description}
        </p>
      </div>
    </div>
  );
};

export default TestimonialDetails;
