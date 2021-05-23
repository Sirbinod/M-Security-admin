import React, {useState} from "react";
import {Form} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {licensesCreate} from "../../store/action/licenses";

const CreateLicens = () => {
  const state = useSelector((state) => state.licenses);
  const dispatch = useDispatch();
  const {
    user: {token},
  } = useSelector((state) => state.profile);

  const [licens, setLicens] = useState({number: "", platformID: ""});

  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setLicens({...licens, [name]: value});
  };

  const postData = async (e) => {
    e.preventDefault();
    try {
      const data = await dispatch(
        licensesCreate(licens.number, licens.platformID, token)
      );
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
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
          <form className="forms-sample" onSubmit={postData}>
            <Form.Group>
              <label htmlFor="number">Number</label>
              <Form.Control
                type="text"
                name="number"
                value={licens.number}
                className="form-control"
                id="number"
                placeholder="number"
                onChange={handleInput}
              />
            </Form.Group>
            <Form.Group>
              <label htmlFor="platformID">Plateform ID</label>
              <Form.Control
                type="platformID"
                name="platformID"
                value={licens.platformID}
                className="form-control"
                id="platformID"
                placeholder="Platform ID"
                onChange={handleInput}
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

export default CreateLicens;
