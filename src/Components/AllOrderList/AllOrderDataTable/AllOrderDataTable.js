import React from "react";

const AllOrderDataTable = ({ allOrderList }) => {
  return (
    <table className="table table-borderless">
      <thead>
        <tr>
          <th className="text-secondary text-left" scope="col">
            Sr No
          </th>
          <th className="text-secondary" scope="col">
            Name
          </th>

          <th className="text-secondary" scope="col">
            Order Name
          </th>
          <th className="text-secondary" scope="col">
            Order Price
          </th>

          <th className="text-secondary" scope="col">
            Email
          </th>
          <th className="text-secondary" scope="col">
            Payment Id
          </th>
        </tr>
      </thead>
      <tbody>
        {allOrderList.map((order, index) => (
          <tr>
            <td>{index + 1}</td>
            <td>{order.data.clientName}</td>

            <td>{order.orderName}</td>
            <td>{order.orderPrice}</td>
            <td>{order.data.clientEmail}</td>
            <td>{order.paymentId}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AllOrderDataTable;
