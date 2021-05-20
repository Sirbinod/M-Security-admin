import React from "react";

const CostList = () => {
  return (
    <div>
      <div className="page-header">
        <h3 className="page-title">Cost Details </h3>
      </div>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Cost List</h4>

          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Plateform</th>
                  <th>Price</th>
                  <th>Title</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>PC</td>
                  <td> Rs 500</td>
                  <td>This is pc</td>
                  <td>
                    <label className="badge badge-warning">Edit</label>
                  </td>
                  <td>
                    <label className="badge badge-danger">Delete</label>
                  </td>
                </tr>
                <tr>
                  <td>PC</td>
                  <td> Rs 500</td>
                  <td>This is pc</td>
                  <td>
                    <label className="badge badge-warning">Edit</label>
                  </td>
                  <td>
                    <label className="badge badge-danger">Delete</label>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostList;
