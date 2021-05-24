import React, {useState} from "react";
import {Form} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {licensesCreate} from "../../store/action/licenses";
import {Field, reduxForm} from "redux-form";
import validate from "../test/validate";

const renderField = ({input, label, type, meta: {touched, error, warning}}) => (
  <div>
    <input {...input} placeholder={label} type={type} />

    {touched &&
      ((error && <span className="error">{error}</span>) ||
        (warning && <span>{warning}</span>))}
  </div>
);

const CreateLicens = (props) => {
  const state = useSelector((state) => state.licenses);
  const dispatch = useDispatch();
  const {
    user: {token},
  } = useSelector((state) => state.profile);

  const postData = async (e) => {
    e.preventDefault();
    try {
      const data = await dispatch(
        licensesCreate(e.number, e.platformID, token)
      );
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  const {handleSubmit} = props;
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
          <form className="forms-sample" onSubmit={handleSubmit(postData)}>
            <Form.Group>
              <label htmlFor="number">Number</label>
              <Field
                type="number"
                name="number"
                className="form-control"
                label="Number"
                component={renderField}
              />
            </Form.Group>
            <Form.Group>
              <label htmlFor="platformID">Platform ID</label>
              <Field
                type="text"
                name="platformID"
                className="form-control"
                label="Platform ID"
                component={renderField}
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

export default reduxForm({
  validate: validate,
  form: "licensesForm",
})(CreateLicens);
