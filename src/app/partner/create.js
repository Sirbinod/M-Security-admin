import React, {useState} from "react";
import {Form} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {partnerCreate} from "../../store/action/partner";

const Create = () => {
  const state = useSelector((state) => state.partner);
  const dispatch = useDispatch();
  const {
    user: {token},
  } = useSelector((state) => state.profile);

  const [partner, setPartner] = useState({
    name: "",
    email: "",
    password: "",
    location: "",
    phone: "",
    shopid: "",
  });

  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setPartner({...partner, [name]: value});
  };
  const postData = async (e) => {
    e.preventDefault();
    try {
      const data = await dispatch(
        partnerCreate(
          partner.name,
          partner.email,
          partner.password,
          partner.phone,
          partner.shopid,
          token
        )
      );
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
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
          <form className="forms-sample" onSubmit={postData}>
            <Form.Group>
              <label htmlFor="name">Name</label>
              <Form.Control
                type="text"
                name="name"
                value={partner.name}
                className="form-control"
                id="name"
                placeholder="Name"
                onChange={handleInput}
              />
            </Form.Group>
            <Form.Group>
              <label htmlFor="email">Email address</label>
              <Form.Control
                type="email"
                name="email"
                value={partner.email}
                className="form-control"
                id="email"
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
                value={partner.password}
                placeholder="Password"
                onChange={handleInput}
              />
            </Form.Group>

            <Form.Group>
              <label htmlFor="location">Location</label>
              <Form.Control
                type="text"
                name="location"
                className="form-control"
                id="location"
                value={partner.location}
                placeholder="Location"
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
                value={partner.phone}
                placeholder="Phone Number"
                onChange={handleInput}
              />
            </Form.Group>
            <Form.Group>
              <label htmlFor="shopid">Shop ID</label>
              <Form.Control
                type="text"
                className="form-control"
                id="shopid"
                name="shopid"
                value={partner.shopid}
                placeholder="Shop ID"
                onChange={handleInput}
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
