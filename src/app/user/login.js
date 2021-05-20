import React, {useState} from "react";
import {Form} from "react-bootstrap";
import {useSelector, useDispatch} from "react-redux";
import {login, loginSuccess} from "../../store/action/profile";

const Login = () => {
  const {loading, error, success} = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  const [user, setUser] = useState({email: "", password: ""});
  let name, value;
  const handleInput = (x) => {
    name = x.target.name;
    value = x.target.value;
    setUser({...user, [name]: value});
  };
  const postData = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      const response = await login(user.email, user.password);
      console.log(response.data.success);

      if (response.data.success) {
        dispatch(loginSuccess(response.data));
      }
    } catch (err) {}
    // dispatch(login(user.name, user.password));
  };
  return (
    <div>
      <div className="page-header">
        <h3 className="page-title">User Login</h3>
      </div>

      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Login Form</h4>
          <form className="forms-sample" onSubmit={postData}>
            <Form.Group>
              <label htmlFor="email">Email address</label>
              <Form.Control
                type="email"
                className="form-control"
                name="email"
                id="email"
                placeholder="Enter-Email"
                value={user.email}
                onChange={handleInput}
              />
            </Form.Group>
            <Form.Group>
              <label htmlFor="password">Password</label>
              <Form.Control
                type="password"
                className="form-control"
                name="password"
                id="Password"
                value={user.password}
                onChange={handleInput}
                placeholder="Password"
              />
            </Form.Group>

            <button
              type="submit"
              // onClick={postData}
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

export default Login;
