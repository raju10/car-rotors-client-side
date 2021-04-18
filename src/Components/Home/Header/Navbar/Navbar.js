import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../../App";
import navLogo from "../../../../images/logo_01_1x.png";
const Navbar = () => {
  const [loginUser, setLoginUser] = useContext(UserContext);
  // const [prddetls, setPrdDetls] = useState([]);
  // console.log("prddetls", prddetls);
  // const [clientOrdersDetls, setClientOrdersDetls] = useState([]);
  // console.log("clientOrdersDetls", clientOrdersDetls);
  // useEffect(() => {
  //   fetch("https://warm-beach-20852.herokuapp.com/ourProduct")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setPrdDetls(data);
  //     });
  // }, []);
  // //////////
  // useEffect(() => {
  //   // fetch("https://warm-beach-20852.herokuapp.com/clientOrder?email=" + loginUser.email)
  //   fetch("https://warm-beach-20852.herokuapp.com/AllOrder")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setClientOrdersDetls(data);
  //     });
  // }, []);
  ////================///

  return (
    <nav
      class="navbar navbar-expand-lg navbar-light"
      style={{ background: "lightGray" }}
    >
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <img src={navLogo} alt="" />
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <Link class="nav-link mr-5 active" aria-current="page" to="/home">
                Home
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link mr-5 text-white" to="/admain">
                Admain
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link mr-5 text-white" to="#">
                contact us
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link mr-5 text-white" to="/login">
                Log in
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
