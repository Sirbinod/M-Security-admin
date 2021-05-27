import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {costFetch} from "../../store/action/cost";
import Loading from "../loading/loading";

const CostList = () => {
  const dispatch = useDispatch();
  const {platform, loading, error} = useSelector((state) => state.cost);
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
          {loading ? (
            <Loading />
          ) : error ? (
            <p className="text-danger">{error}</p>
          ) : (
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
                  {platform.map((c) => (
                    <tr>
                      <td>{c.platform}</td>
                      <td>{c.price}</td>
                      <td>{c.title}</td>
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
          )}
        </div>
      </div>
    </div>
  );
};

export default CostList;
