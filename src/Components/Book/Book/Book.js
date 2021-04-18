import React from "react";
import ClientSidebar from "../../ClientSidebar/ClientSidebar/ClientSidebar";
import OrderBooking from "../OrderBooking/OrderBooking";

const Book = () => {
  return (
    <section>
      <div className="row " style={{ background: "#f4fdfb" }}>
        <div className="col-md-4">
          <ClientSidebar></ClientSidebar>
        </div>
        <div className="col-md-8 ">
          <OrderBooking></OrderBooking>
        </div>
      </div>
    </section>
  );
};

export default Book;
