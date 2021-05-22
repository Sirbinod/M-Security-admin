import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {costFetch} from "../../store/action/cost";

const CostList = () => {
  const dispatch = useDispatch();
  const platform = useSelector((state) => state.cost);
  const {
    user: {token},
  } = useSelector((state) => state.profile);
  useEffect(() => {
    dispatch(costFetch(token));
  }, [dispatch]);
  return (
    <div>
      <div className="page-header">
        <h3 className="page-title">Cost Details </h3>
      </div>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Cost List</h4>

          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Plateform</th>
                  <th>Price</th>
                  <th>Title</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {platform.platform.map((c) => (
                  <tr>
                    <td>PC</td>
                    <td> Rs 500</td>
                    <td>This is pc</td>
                    <td>
                      <label className="badge badge-warning">Edit</label>
                    </td>
                    <td>
                      <label className="badge badge-danger">Delete</label>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostList;
