import React from "react";
import {Form} from "react-bootstrap";
const Create = () => {
  return (
    <div>
      <div className="page-header">
        <h3 className="page-title">Partner Create </h3>
      </div>
      {/* <div className="row">
        <div className="col-12 grid-margin stretch-card"> */}
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">New Partner Create</h4>
          {/* <p className="card-description"> Basic form elements </p> */}
          <form className="forms-sample">
            <Form.Group>
              <label htmlFor="exampleInputName1">Name</label>
              <Form.Control
                type="text"
                className="form-control"
                id="exampleInputName1"
                placeholder="Name"
              />
            </Form.Group>
            <Form.Group>
              <label htmlFor="exampleInputEmail3">Email address</label>
              <Form.Control
                type="email"
                className="form-control"
                id="exampleInputEmail3"
                placeholder="Email"
              />
            </Form.Group>
            <Form.Group>
              <label htmlFor="exampleInputPassword4">Password</label>
              <Form.Control
                type="password"
                className="form-control"
                id="exampleInputPassword4"
                placeholder="Password"
              />
            </Form.Group>

            <Form.Group>
              <label htmlFor="exampleInputCity1">Location</label>
              <Form.Control
                type="text"
                className="form-control"
                id="exampleInputCity1"
                placeholder="Location"
              />
            </Form.Group>
            <Form.Group>
              <label htmlFor="exampleInputCity1">Phone Number</label>
              <Form.Control
                type="text"
                className="form-control"
                id="exampleInputCity1"
                placeholder="Phone Number"
              />
            </Form.Group>
            <Form.Group>
              <label htmlFor="exampleInputCity1">Shop ID</label>
              <Form.Control
                type="text"
                className="form-control"
                id="exampleInputCity1"
                placeholder="Shop ID"
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

export default Create;
