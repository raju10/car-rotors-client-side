import React from "react";

const ManageAllSarvicesData = ({ allSarvices }) => {
  const hendelPrdDeleted = (id) => {
    console.log("pd", id);
    if (id) {
      fetch(`/delete/${id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("deleted successfully", data);
        });
    }
  };
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
            <td>
              <button
                onClick={() => hendelPrdDeleted(sarvice._id)}
                className="btn btn-danger"
              >
                Deleted
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ManageAllSarvicesData;
