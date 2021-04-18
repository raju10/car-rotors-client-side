import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";
import Sidebar from "../../Admain/Sidebar/Sidebar";
import AllOrderDataTable from "../AllOrderDataTable/AllOrderDataTable";

const AllOrderList = () => {
  const [allOrderList, setAllOrderList] = useState([]);
  const [orderBookingList, setOrderBookingList] = useState([]);
  const [loginUser, setLoginUser] = useContext(UserContext);
  useEffect(() => {
    fetch(
      "https://warm-beach-20852.herokuapp.com/clientOrder?email=" +
        loginUser.email
    )
      .then((res) => res.json())
      .then((data) => {
        setOrderBookingList(data);
      });
  }, []);
  ///////
  fetch("https://warm-beach-20852.herokuapp.com/addAllOrder", {
    method: "POST",
    body: JSON.stringify(orderBookingList),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
  //////
  useEffect(() => {
    fetch("https://warm-beach-20852.herokuapp.com/AllOrder")
      .then((res) => res.json())
      .then((data) => {
        setAllOrderList(data);
      });
  }, []);
  return (
    <div className="container-fluid row">
      <Sidebar></Sidebar>
      <div
        className="col-md-10 p-4 pr-5"
        style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}
      >
        <h5 className="text-brand">All Orders</h5>

        <AllOrderDataTable allOrderList={allOrderList}></AllOrderDataTable>
      </div>
    </div>
  );
};

export default AllOrderList;
