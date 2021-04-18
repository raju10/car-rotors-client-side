import React from "react";
import ClientSidebar from "../../ClientSidebar/ClientSidebar/ClientSidebar";
import OrderDetails from "../OrderDetails/OrderDetails";
const Order = () => {
  return (
    <section>
      <div className="row " style={{ background: "#f4fdfb" }}>
        <div className="col-md-5">
          <ClientSidebar></ClientSidebar>
        </div>
        <div className="col-md-7 ">
          <OrderDetails></OrderDetails>
        </div>
      </div>
    </section>
  );
};

export default Order;
