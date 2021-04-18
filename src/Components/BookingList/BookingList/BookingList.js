import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";
import ClientSidebar from "../../ClientSidebar/ClientSidebar/ClientSidebar";
import BookingListDetails from "../BookingListDetails/BookingListDetails";

const BookingList = () => {
  const [orderBookingList, setOrderBookingList] = useState([]);
  const [loginUser, setLoginUser] = useContext(UserContext);
  console.log("orderBookingList", orderBookingList);
  useEffect(() => {
    fetch("http://localhost:10000/clientOrder?email=" + loginUser.email)
      .then((res) => res.json())
      .then((data) => {
        setOrderBookingList(data);
      });
  }, []);
  return (
    <section>
      <div className="row " style={{ background: "#f4fdfb" }}>
        <div className="col-md-5">
          <ClientSidebar></ClientSidebar>
        </div>
        <div className="col-md-7 ">
          <div className="d-flex justify-content-center mt-5 ">
            {orderBookingList.map((bookingOrder) => (
              <BookingListDetails
                bookingOrder={bookingOrder}
              ></BookingListDetails>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingList;
