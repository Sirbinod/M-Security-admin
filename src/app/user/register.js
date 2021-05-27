import axios from "axios";
import React, {useEffect, useState} from "react";
import {Form} from "react-bootstrap";
import {signupapi} from "../../utility/profile";
import validate from "../test/validate";
import {Field, reduxForm} from "redux-form";
import {Redirect} from "react-router";

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

const Register = (props) => {
  const [isPWShown, setIsPWShown] = useState(false);

  const showPassword = () => {
    setIsPWShown(!isPWShown);
  };

  const [error, setError] = useState(false);
  const [message, setMessage] = useState([]);
  const [success, setSuccess] = useState(false);

  if (success) {
    return <Redirect to="/" />;
  }
  const {handleSubmit, pristine, submitting} = props;
  const postData = async (e) => {
    // e.preventDefault();
    try {
      await axios.post(signupapi, {
        firstname: e.fname,
        lastname: e.lname,
        email: e.email,
        password: e.password,
        phone: e.phone,
      });
      setSuccess(true);
    } catch (err) {
      setError(true);
      setMessage(err.response.data.error);
    }
  };

  return (
    <div>
      <div className="page-header-l">
        <h3 className="page-title-l">User Signup </h3>
      </div>
      <div className="card" style={{maxWidth: "40rem", margin: "0 auto"}}>
        <div className="card-body">
          <h4 className="card-title">Signup From</h4>

          <form className="forms-sample" onSubmit={handleSubmit(postData)}>
            <Form.Group>
              <label htmlFor="fname">First Name</label>
              <Field
                type="text"
                className="form-control"
                name="fname"
                placeholder="First Name"
                component={renderField}
                label="enter first name"
              />
            </Form.Group>
            <Form.Group>
              <label htmlFor="lname">Last Name</label>
              <Field
                type="text"
                className="form-control"
                name="lname"
                placeholder="First Name"
                component={renderField}
                label="enter last name"
              />
            </Form.Group>
            <Form.Group>
              <label htmlFor="email">Email address</label>
              <Field
                name="email"
                type="email"
                className="form-control"
                component={renderField}
                label="enter email"
              />
            </Form.Group>
            <Form.Group>
              <label htmlFor="password">Password</label>
              <Field
                name="password"
                type={isPWShown ? "text" : "password"}
                className="form-control"
                component={renderField}
                label="enter password"
              />
            </Form.Group>

            <Form.Group>
              <label htmlFor="phone">Phone Number</label>
              <Field
                name="phone"
                type="number"
                className="form-control"
                component={renderField}
                label="Phone Number"
              />
            </Form.Group>
            <Form.Group>
              <div className="form-check">
                <label className="form-check-label text-muted">
                  <input
                    type="checkbox"
                    checked={isPWShown}
                    onChange={showPassword}
                    className="form-check-input"
                  />
                  <i className="input-helper"></i>
                  Show Password
                </label>
              </div>
            </Form.Group>
            {error ? <p className="text-danger">{message}</p> : ""}
            <button
              type="submit"
              // onclick={postData}
              className="btn btn-primary mr-2"
              disabled={pristine || submitting}
            >
              Submit
            </button>
            <button className="btn btn-dark" disabled={pristine || submitting}>
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default reduxForm({
  validate: validate,
  form: "sigupForm", // a unique identifier for this form
})(Register);
