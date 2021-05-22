import React, {useState} from "react";
import {Form} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {costCreate} from "../../store/action/cost";

const CreateCost = () => {
  const state = useSelector((state) => state.cost);
  const {
    user: {token},
  } = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  const [cost, setCost] = useState({
    platform: "",
    price: "",
    title: "",
  });

  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setCost({...cost, [name]: value});
  };
  const postData = async (e) => {
    e.preventDefault();
    try {
      const dataCost = await dispatch(
        costCreate(cost.platform, cost.price, cost.title, token)
      );
    } catch (err) {
      console.log(err);
    }
  };

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
          <form className="forms-sample" onSubmit={postData}>
            <Form.Group>
              <label htmlFor="platform">Platform</label>
              <Form.Control
                type="text"
                className="form-control"
                id="platform"
                name="platform"
                value={cost.platform}
                onChange={handleInput}
                placeholder="PC"
              />
            </Form.Group>
            <Form.Group>
              <label htmlFor="price">Price</label>
              <Form.Control
                type="text"
                className="form-control"
                id="price"
                name="price"
                value={cost.price}
                onChange={handleInput}
                placeholder="23"
              />
            </Form.Group>
            <Form.Group>
              <label htmlFor="title">Title</label>
              <Form.Control
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={cost.title}
                onChange={handleInput}
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
