import React from "react";
import ClientSidebar from "../../ClientSidebar/ClientSidebar/ClientSidebar";
import ReviewDetails from "../ReviewDetails/ReviewDetails";

const Review = () => {
  return (
    <section>
      <div className="row " style={{ background: "#f4fdfb" }}>
        <div className="col-md-4">
          <ClientSidebar></ClientSidebar>
        </div>
        <div className="col-md-8 ">
          <ReviewDetails></ReviewDetails>
        </div>
      </div>
    </section>
  );
};

export default Review;
