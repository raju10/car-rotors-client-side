import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div
      className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4 "
      style={{ height: "100vh" }}
    >
      <ul className="list-unstyled">
        <li>
          <Link to="/allOrderList" className="text-black">
            <span>All Order List</span>
          </Link>
        </li>
        <li>
          <Link to="/" className="text-black">
            <span>Home</span>
          </Link>
        </li>

        <div>
          <li>
            <Link to="/addService" className="text-black">
              <span>Add Service</span>
            </Link>
          </li>
          <li>
            <Link to="/makeAdmain" className="text-black">
              <span>Make Admain</span>
            </Link>
          </li>
          <li>
            <Link to="/manageSarvice" className="text-black">
              <span>Manage Service</span>
            </Link>
          </li>
        </div>
      </ul>
      <div>
        <Link to="/" className="text-black">
          <span>Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
