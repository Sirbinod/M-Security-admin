import React from "react";
import {Form} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {partnerCreate} from "../../store/action/partner";
import {Field, reduxForm} from "redux-form";
import validate from "../test/validate";
import Loading from "../loading/loading";

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

const Create = (props) => {
  const {loading, error, success} = useSelector((state) => state.partner);
  const dispatch = useDispatch();

  const {
    user: {token},
  } = useSelector((state) => state.profile);

  const postData = async (e) => {
    // e.preventDefault();
    try {
      await dispatch(
        partnerCreate(
          e.name,
          e.email,
          e.password,
          e.location,
          e.phone,
          e.shopid,
          token
        )
      );
      reset();
    } catch (err) {
      dispatch(err);
    }
  };
  const {handleSubmit, reset, pristine, submitting} = props;
  return (
    <div>
      <div className="page-header">
        <h3 className="page-title">Partner Create </h3>
      </div>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">New Partner Create</h4>
          {/* <p className="card-description"> Basic form elements </p> */}
          <form className="forms-sample" onSubmit={handleSubmit(postData)}>
            <Form.Group>
              <label htmlFor="name">Name</label>
              <Field
                type="text"
                name="name"
                className="form-control"
                label="Name"
                component={renderField}
              />
            </Form.Group>
            <Form.Group>
              <label htmlFor="email">Email address</label>
              <Field
                type="email"
                name="email"
                className="form-control"
                label="Email"
                component={renderField}
              />
            </Form.Group>
            <Form.Group>
              <label htmlFor="password">Password</label>
              <Field
                type="password"
                className="form-control"
                name="password"
                label="Password"
                component={renderField}
              />
            </Form.Group>

            <Form.Group>
              <label htmlFor="location">Location</label>
              <Field
                type="text"
                name="location"
                className="form-control"
                label="Location"
                component={renderField}
              />
            </Form.Group>
            <Form.Group>
              <label htmlFor="phone">Phone Number</label>
              <Field
                type="number"
                className="form-control"
                id="phone"
                name="phone"
                label="Phone Number"
                component={renderField}
              />
            </Form.Group>
            <Form.Group>
              <label htmlFor="shopid">Shop ID</label>
              <Field
                type="text"
                className="form-control"
                id="shopid"
                name="shopid"
                label="Shop ID"
                component={renderField}
              />
            </Form.Group>
            {error ? (
              <p className="text-danger">{error}</p>
            ) : success ? (
              <p className="text-success">Partner Created SuccessFull</p>
            ) : (
              ""
            )}

            <button
              type="submit"
              className="btn btn-primary mr-2"
              disabled={pristine || submitting}
            >
              Submit
            </button>
            <button
              className="btn btn-dark"
              onClick={reset}
              disabled={pristine || submitting}
            >
              Cancel
            </button>
            {loading ? <Loading /> : ""}
          </form>
        </div>
      </div>
    </div>
  );
};

export default reduxForm({
  validate: validate,
  form: "partnerForm",
})(Create);
