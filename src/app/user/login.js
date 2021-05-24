import React, {useState} from "react";
import {Form} from "react-bootstrap";
import {useSelector, useDispatch} from "react-redux";
import {login, loginSuccess} from "../../store/action/profile";
import validate from "../test/validate";
import {Field, reduxForm} from "redux-form";
import {Link} from "react-router-dom";

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
  const dispatch = useDispatch();
  const {handleSubmit, pristine, reset, submitting} = props;
  const onSubmit = async (e) => {
    try {
      const res = await login(e.email, e.password);
      if (res.data.success) {
        dispatch(loginSuccess(res.data));
      }
    } catch (err) {}
    // dispatch(login(e.name, e.password));
  };
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
              <button
                className={`${isPWShown ? "active" : ""}`}
                onClick={() => showPassword()}
                type="button"
              >
                Show Password
              </button>
            </Form.Group>
            <button
              type="submit"
              // onClick={postData}
              className="btn btn-primary mr-2"
            >
              <Link to="/">Submit</Link>
            </button>
            <button className="btn btn-dark">Cancel</button>
            <Link className="text-right ml-5" to="/user/register">
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
