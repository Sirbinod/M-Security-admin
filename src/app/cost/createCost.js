import React, {useState} from "react";
import {Form} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {costCreate} from "../../store/action/cost";
import {Field, reduxForm} from "redux-form";
import validate from "../test/validate";

const renderField = ({input, label, type, meta: {touched, error, warning}}) => (
  <div>
    <div>
      <input {...input} placeholder={label} type={type} />
    </div>
    {touched &&
      ((error && <span className="error">{error}</span>) ||
        (warning && <span>{warning}</span>))}
  </div>
);

const CreateCost = (props) => {
  const {loading, success, error} = useSelector((state) => state.cost);
  const {
    user: {token},
  } = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  const postData = async (e) => {
    // e.preventDefault();
    try {
      const dataCost = await dispatch(
        costCreate(e.platform, e.price, e.title, token)
      );
      reset();
      console.log(dataCost);
    } catch (err) {
      console.log(err);
    }
  };
  const {handleSubmit, reset} = props;
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
          <form className="forms-sample" onSubmit={handleSubmit(postData)}>
            <Form.Group>
              <label htmlFor="platform">Platform</label>
              <Field
                type="text"
                name="platform"
                className="form-control"
                label="Platform"
                component={renderField}
              />
            </Form.Group>
            <Form.Group>
              <label htmlFor="price">Price</label>
              <Field
                type="number"
                name="price"
                className="form-control"
                label="Price"
                component={renderField}
              />
            </Form.Group>
            <Form.Group>
              <label htmlFor="title">Title</label>
              <Field
                type="text"
                name="title"
                className="form-control"
                label="Title"
                component={renderField}
              />
            </Form.Group>
            {error ? <p className="text-danger">{error}</p> : ""}
            {success ? (
              <p className="text-success">Cost Created SuccessFull</p>
            ) : (
              ""
            )}
            <button type="submit" className="btn btn-primary mr-2">
              Submit
            </button>
            <button className="btn btn-dark" onClick={reset}>
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default reduxForm({validate: validate, form: "costForm"})(CreateCost);
