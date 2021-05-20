import React from "react";
import {Form} from "react-bootstrap";

const CreateCost = () => {
  return (
    <div>
      <div className="page-header">
        <h3 className="page-title">Cost Create </h3>
      </div>
      {/* <div className="row">
        <div className="col-12 grid-margin stretch-card"> */}
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">New Cost Create</h4>
          {/* <p className="card-description"> Basic form elements </p> */}
          <form className="forms-sample">
            <Form.Group>
              <label htmlFor="exampleInputName1">Platform</label>
              <Form.Control
                type="text"
                className="form-control"
                id="plateform"
                placeholder="PC"
              />
            </Form.Group>
            <Form.Group>
              <label htmlFor="exampleInputEmail3">Price</label>
              <Form.Control
                type="text"
                className="form-control"
                id="price"
                placeholder="23"
              />
            </Form.Group>
            <Form.Group>
              <label htmlFor="exampleInputPassword4">Title</label>
              <Form.Control
                type="text"
                className="form-control"
                id="exampleInputPassword4"
                placeholder="this is pc"
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

export default CreateCost;
