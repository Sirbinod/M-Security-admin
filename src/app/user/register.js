import axios from "axios";
import React, {useState} from "react";
import {Form} from "react-bootstrap";
import {Redirect} from "react-router";
import {signupapi} from "../../utility/profile";
import validate from "../test/validate";
import {Field, reduxForm} from "redux-form";

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
  const {handleSubmit} = props;
  const postData = async (e) => {
    // e.preventDefault();
    try {
      const res = await axios.post(signupapi, {
        firstname: e.firstname,
        lastname: e.lastname,
        email: e.email,
        password: e.password,
        phone: e.phone,
      });

      console.log("user regist: ", res);
    } catch (err) {
      console.log("erooororro", err);
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

          <form className="forms-sample" onSubmit={handleSubmit(postData)}>
            <Form.Group>
              <label htmlFor="firstname">First Name</label>
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
              <label htmlFor="lastname">Last Name</label>
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
              <button
                className={`${
                  isPWShown ? "active btn btn-warning" : "btn btn-info"
                }`}
                onClick={() => showPassword()}
                type="button"
              >
                Show
              </button>
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

export default reduxForm({
  validate: validate,
  form: "sigupForm", // a unique identifier for this form
})(Register);
