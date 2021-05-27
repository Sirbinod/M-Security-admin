import React, {useEffect} from "react";
import {Form} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {licensesCreate} from "../../store/action/licenses";
import {Field, reduxForm} from "redux-form";
import validate from "../test/validate";
import {costFetch} from "../../store/action/cost";
import Loading from "../loading/loading";

const renderField = ({input, label, type, meta: {touched, error, warning}}) => (
  <div>
    <input {...input} placeholder={label} type={type} />

    {touched &&
      ((error && <span className="error">{error}</span>) ||
        (warning && <span>{warning}</span>))}
  </div>
);

const CreateLicens = (props) => {
  const {loading, success, error} = useSelector((state) => state.licenses);
  const {platform, success: pSuccess} = useSelector((state) => state.cost);
  const {
    user: {token},
  } = useSelector((state) => state.profile);

  const dispatch = useDispatch();
  useEffect(() => {
    if (!pSuccess && platform.length === 0) {
      dispatch(costFetch(token));
    }
  }, [dispatch]);
  const postData = async (e) => {
    // e.preventDefault();
    console.log(e);
    dispatch(licensesCreate(e.num, e.platformId, token));
    reset();
  };
  const {handleSubmit, reset, pristine, submitting} = props;
  return (
    <div>
      <div className="page-header">
        <h3 className="page-title">Licenses Create </h3>
      </div>
      {/* <div className="row">
        <div className="col-12 grid-margin stretch-card"> */}
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">New Licenses Create</h4>
          {/* <p className="card-description"> Basic form elements </p> */}
          <form className="forms-sample" onSubmit={handleSubmit(postData)}>
            <Form.Group>
              <label htmlFor="num">Number</label>
              <Field
                type="number"
                name="num"
                className="form-control"
                label="Number"
                component={renderField}
              />
            </Form.Group>
            <Form.Group>
              <label htmlFor="platformID">Platform ID</label>
              {/* <div className="col-sm-9"> */}
              <Field
                className="select-form"
                name="platformId"
                component="select"
              >
                <option value={0}>Select Platform</option>
                {platform.map((e) => (
                  <option key={e._id} value={e.id}>
                    {e.title}
                  </option>
                ))}
              </Field>
              {/* </div> */}
            </Form.Group>
            {error ? (
              <p className="text-danger">{error}</p>
            ) : success ? (
              <p className="text-success">Licenses created SuccessFull</p>
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
            <button className="btn btn-dark" onClick={reset}>
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
  form: "licensesForm",
})(CreateLicens);
