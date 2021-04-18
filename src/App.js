import "./App.css";
import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import Login from "./Components/Login/Login";
import Order from "./Components/Order/Order/Order";
import Admain from "./Components/Admain/Admain/Admain";
import YourPlacedOrder from "./Components/YourPlacedOrder/YourPlacedOrder/YourPlacedOrder";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Book from "./Components/Book/Book/Book";
import BookingList from "./Components/BookingList/BookingList/BookingList";
import Review from "./Components/Review/Review/Review";
import AllOrderList from "./Components/AllOrderList/AllOrderList/AllOrderList";
import ManageSarvice from "./Components/ManageSarvice/ManageSarvice/ManageSarvice";

export const UserContext = createContext();
export const userOrderContext = createContext();
function App() {
  const [loginUser, setLoginUser] = useState({});
  const [selcOrder, setSelcOrder] = useState({
    orderName: "",
    orderImg: "",
    orderPrice: "",
  });
  return (
    <userOrderContext.Provider value={[selcOrder, setSelcOrder]}>
      <UserContext.Provider value={[loginUser, setLoginUser]}>
        <h3>email : {loginUser.email}</h3>
        <Router>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/order">
              <Order></Order>
            </Route>

            <PrivateRoute path="/admain">
              <Admain></Admain>
            </PrivateRoute>
            <PrivateRoute path="/yourPlasecOrder">
              <YourPlacedOrder></YourPlacedOrder>
            </PrivateRoute>
            <PrivateRoute path="/bookingOrder">
              <Book></Book>
            </PrivateRoute>
            <Route path="/bookingList">
              <BookingList></BookingList>
            </Route>
            <Route path="/reviews">
              <Review></Review>
            </Route>
            <Route path="/allOrderList">
              <AllOrderList></AllOrderList>
            </Route>
            <Route path="/manageSarvice">
              <ManageSarvice></ManageSarvice>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </userOrderContext.Provider>
  );
}

export default App;
