import React from "react";

const ViewPartner = () => {
  return (
    <div>
      <div className="page-header">
        <h3 className="page-title">Partners</h3>
      </div>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Partner Details</h4>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Location</th>
                  <th>Phone No.</th>
                  <th>Shop ID</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Esewa</td>
                  <td>merchant@esewa.com.np</td>
                  <td>Kathmandu, Nepal</td>
                  <td>9801079578</td>
                  <td>0003</td>
                </tr>
                <tr>
                  <td>Esewa</td>
                  <td>merchant@esewa.com.np</td>
                  <td>Kathmandu, Nepal</td>
                  <td>9801079578</td>
                  <td>0003</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewPartner;
