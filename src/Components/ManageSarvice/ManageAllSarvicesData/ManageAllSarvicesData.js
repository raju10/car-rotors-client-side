import React from "react";

const ManageAllSarvicesData = ({ allSarvices }) => {
  return (
    <table className="table table-borderless">
      <thead>
        <tr>
          <th className="text-secondary text-left" scope="col">
            Sr No
          </th>
          <th className="text-secondary" scope="col">
            img
          </th>
          {/* <th className="text-secondary" scope="col">Gender</th>
                      <th className="text-secondary" scope="col">Age</th> */}
          <th className="text-secondary" scope="col">
            Product Name
          </th>
          <th className="text-secondary" scope="col">
            Product Price
          </th>

          <th className="text-secondary" scope="col">
            Admain Email
          </th>
        </tr>
      </thead>
      <tbody>
        {allSarvices.map((sarvice, index) => (
          <tr>
            <td>{index + 1}</td>
            <td>
              <img
                src={sarvice.image}
                alt=""
                style={{ width: "50px", borderRadius: "10%" }}
              />
            </td>

            <td>{sarvice.name}</td>
            <td>{sarvice.price}</td>

            <td>{sarvice.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ManageAllSarvicesData;
