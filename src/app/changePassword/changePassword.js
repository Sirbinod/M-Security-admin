import React, {useState} from "react";
import {Form} from "react-bootstrap";
import {Field, reduxForm} from "redux-form";
import validate from "../test/validate";
import Loading from "../loading/loading";
import {userPW_Change} from "../../store/action/profile";
import {useSelector} from "react-redux";

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

const ChangePassword = (props) => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [msg, setMsg] = useState([]);
  const {
    user: {token},
  } = useSelector((state) => state.profile);

  const {handleSubmit, reset, pristine, submitting} = props;
  const postData = async (e) => {
    try {
      await userPW_Change(e.password, e.npassword, token);
      setSuccess(true);
    } catch (error) {
      setError(true);
      setMsg(error.response.data.error);
    }
  };
  return (
    <div>
      <div className="page-header">
        <h3 className="page-title">Change Password </h3>
      </div>
      {/* <div className="row">
        <div className="col-12 grid-margin stretch-card"> */}
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">New Password Create</h4>
          {/* <p className="card-description"> Basic form elements </p> */}
          <form className="forms-sample" onSubmit={handleSubmit(postData)}>
            <Form.Group>
              <label htmlFor="password">Old Password</label>
              <Field
                type="text"
                name="password"
                className="form-control"
                label="old password"
                component={renderField}
              />
            </Form.Group>

            <Form.Group>
              <label htmlFor="npassword">New Password</label>
              <Field
                type="text"
                name="npassword"
                className="form-control"
                label="password"
                component={renderField}
              />
            </Form.Group>
            {error ? (
              <p className="text-danger">{msg}</p>
            ) : success ? (
              <p className="text-success">Password Chamge SuccessFull</p>
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default reduxForm({validate: validate, form: "changepwForm"})(
  ChangePassword
);
