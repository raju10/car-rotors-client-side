import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext, userOrderContext } from "../../../App";

const YourPlacedOrder = () => {
  const [selcOrder, setSelcOrder] = useContext(userOrderContext);

  const handelBuyNow = () => {};
  return (
    <div>
      <div>
        <Link to="/bookingOrder">
          <button onClick={handelBuyNow}>your order buy now</button>
        </Link>
      </div>
      <img src={selcOrder.orderImg} alt="" className="w-50" />
      <h4>{selcOrder.orderName}</h4>
      <p>{selcOrder.orderPrice}</p>
    </div>
  );
};

export default YourPlacedOrder;
