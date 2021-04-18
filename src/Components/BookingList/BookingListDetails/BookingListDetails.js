import React from "react";

const BookingListDetails = ({ bookingOrder }) => {
  return (
    <div className="col-md-3 text-center mt-5">
      <div style={{ border: "1px solid green", padding: "10px 15px" }}>
        <img src={bookingOrder.orderImg} alt="" className="w-100" />
        <h5>
          Car name : {bookingOrder.orderName}{" "}
          <span
            style={{ paddingLeft: "10px", color: "green", fontSize: "25px" }}
          >
            ${bookingOrder.orderPrice}
          </span>
        </h5>
      </div>
    </div>
  );
};

export default BookingListDetails;
