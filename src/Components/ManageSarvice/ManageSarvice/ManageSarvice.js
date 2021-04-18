import React, { useEffect, useState } from "react";
import Sidebar from "../../Admain/Sidebar/Sidebar";
import ManageAllSarvicesData from "../ManageAllSarvicesData/ManageAllSarvicesData";

const ManageSarvice = () => {
  const [allSarvices, setAllSarvices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:10000/ourProduct")
      .then((res) => res.json())
      .then((data) => {
        setAllSarvices(data);
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

        <ManageAllSarvicesData
          allSarvices={allSarvices}
        ></ManageAllSarvicesData>
      </div>
    </div>
  );
};

export default ManageSarvice;
