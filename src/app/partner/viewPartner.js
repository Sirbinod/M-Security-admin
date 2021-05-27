import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {partnerFetch} from "../../store/action/partner";
import Loading from "../loading/loading";

const ViewPartner = () => {
  const dispatch = useDispatch();
  const {partners, loading, error} = useSelector((state) => state.partner);
  // const token = "asdasd";
  const {
    user: {token},
  } = useSelector((state) => state.profile);
  useEffect(() => {
    dispatch(partnerFetch(token));
  }, [dispatch]);
  return (
    <div>
      <div className="page-header">
        <h3 className="page-title">Partners</h3>
      </div>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Partner Details</h4>

          {loading ? (
            <Loading />
          ) : error ? (
            <p className="text-danger">{error}</p>
          ) : (
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Location</th>
                    <th>Phone No.</th>
                    <th>Shop ID</th>
                  </tr>
                </thead>

                <tbody>
                  {partners.map((e) => (
                    <tr key={e.id}>
                      <td>{e.name}</td>
                      <td>{e.email}</td>
                      <td>{e.location}</td>
                      <td>{e.phone}</td>
                      <td>{e.shopId}</td>
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

export default ViewPartner;
