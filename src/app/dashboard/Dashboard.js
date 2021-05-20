import React from "react";
import {ProgressBar} from "react-bootstrap";

const Dashboard = () => {
  return (
    <div>
      <div className="row">
        <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-9 ">
                  <h6 className="text-muted font-weight-normal">Total User</h6>
                </div>

                <div className="col-3">
                  <div className="icon icon-box-success">
                    <span className="mdi mdi-account icon-item"></span>
                  </div>
                </div>
              </div>
              <h2 className="mb-0 ml-1">2</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Report</h4>
          <div>
            <h5> facebook </h5>
            <ProgressBar variant="success" now={25} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
