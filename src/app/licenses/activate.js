import React from "react";
import {Form} from "react-bootstrap";

const Activate = () => {
  return (
    <div>
      <div className="page-header">
        <h3 className="page-title">Licenses Create </h3>
      </div>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">New Partner Create</h4>
          {/* <p className="card-description"> Basic form elements </p> */}
          <form className="forms-sample">
            <Form.Group>
              <label htmlFor="exampleFormControlSelect2">Device Type</label>
              <select className="form-control" id="exampleFormControlSelect2">
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </Form.Group>
            <Form.Group>
              <label htmlFor="exampleInputName1">Device ID</label>
              <Form.Control
                type="text"
                className="form-control"
                id="exampleInputName1"
                placeholder="Name"
              />
            </Form.Group>
            <Form.Group>
              <label htmlFor="exampleInputName1">Licenses</label>
              <Form.Control
                type="text"
                className="form-control"
                id="exampleInputName1"
                placeholder="Name"
              />
            </Form.Group>

            <button type="submit" className="btn btn-primary mr-2">
              Submit
            </button>
            <button className="btn btn-dark">Cancel</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Activate;
