import React, {useState} from "react";
import {Form} from "react-bootstrap";
import {useSelector, useDispatch} from "react-redux";
import {login, loginSuccess, loginFail} from "../../store/action/profile";
import validate from "../test/validate";
import {Field, reduxForm} from "redux-form";
import {Link, Redirect} from "react-router-dom";

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

const Login = (props) => {
  const [isPWShown, setIsPWShown] = useState(false);

  const showPassword = () => {
    setIsPWShown(!isPWShown);
  };
  const {error, isLoggedIn} = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const {handleSubmit, pristine, submitting} = props;
  const onSubmit = async (e) => {
    try {
      const res = await login(e.email, e.password);
      if (res.data.success) {
        dispatch(loginSuccess(res.data));
      }
    } catch (err) {
      dispatch(loginFail(err.response.data.error));
    }
  };

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <div className="page-header-l">
        <h3 className="page-title-l">User Login</h3>
      </div>
      <div className="card" style={{maxWidth: "40rem", margin: "0 auto"}}>
        <div className="card-body">
          <h4 className="card-title">Login Form</h4>

          <form className="forms-sample" onSubmit={handleSubmit(onSubmit)}>
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
            {error ? <p className="text-danger">{error}</p> : ""}

            <button
              type="submit"
              className="btn btn-primary mr-2"
              disabled={pristine || submitting}
            >
              Submit
            </button>
            <button className="btn btn-dark" disabled={pristine || submitting}>
              Cancel
            </button>

            <Link to="/register" className="ml-3">
              Create New Account
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default reduxForm({
  validate: validate,
  form: "loginForm", // a unique identifier for this form
})(Login);
