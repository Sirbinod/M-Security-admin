import axios from "axios";
import React, {useState} from "react";
import {Form} from "react-bootstrap";
import {Redirect} from "react-router";
import {signupapi} from "../../utility/profile";

const Register = () => {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    phone: "",
  });

  let name, value;
  const handleInput = (x) => {
    name = x.target.name;
    value = x.target.value;
    setUser({...user, [name]: value});
  };

  const postData = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(signupapi, {
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        password: user.password,
        phone: user.phone,
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="page-header">
        <h3 className="page-title">User Signup </h3>
      </div>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Signup From</h4>

          <form className="forms-sample" onSubmit={postData}>
            <Form.Group>
              <label htmlFor="firstname">First Name</label>
              <Form.Control
                type="text"
                className="form-control"
                id="firstname"
                name="firstname"
                value={user.firstname}
                placeholder="First Name"
                onChange={handleInput}
              />
            </Form.Group>
            <Form.Group>
              <label htmlFor="lastname">Last Name</label>
              <Form.Control
                type="text"
                className="form-control"
                id="lastname"
                name="lastname"
                value={user.lastname}
                placeholder="Last Name"
                onChange={handleInput}
              />
            </Form.Group>
            <Form.Group>
              <label htmlFor="email">Email address</label>
              <Form.Control
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={user.email}
                placeholder="Email"
                onChange={handleInput}
              />
            </Form.Group>
            <Form.Group>
              <label htmlFor="password">Password</label>
              <Form.Control
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={user.password}
                placeholder="Password"
                onChange={handleInput}
              />
            </Form.Group>

            <Form.Group>
              <label htmlFor="phone">Phone Number</label>
              <Form.Control
                type="text"
                className="form-control"
                id="phone"
                name="phone"
                value={user.phone}
                placeholder="Phone Number"
                onChange={handleInput}
              />
            </Form.Group>

            <button
              type="submit"
              // onclick={postData}
              className="btn btn-primary mr-2"
            >
              Submit
            </button>
            <button className="btn btn-dark">Cancel</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
