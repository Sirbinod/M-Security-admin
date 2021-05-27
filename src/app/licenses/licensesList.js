import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {licensesFetch} from "../../store/action/licenses";
import Loading from "../loading/loading";

const LicensesList = () => {
  const {loading, error, data} = useSelector((state) => state.licenses);
  const dispatch = useDispatch();
  const {
    user: {token},
  } = useSelector((state) => state.profile);

  console.log(token);
  useEffect(() => {
    dispatch(licensesFetch(token));
  }, [dispatch]);
  return (
    <div>
      <div className="page-header">
        <h3 className="page-title">Licenses</h3>
      </div>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Licenses Details</h4>
          {loading ? (
            <Loading />
          ) : error ? (
            <p className="text-danger">{error}</p>
          ) : (
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>License_SN</th>
                    <th>Licenses</th>
                    <th>Expires</th>
                    <th>Created Date</th>
                    <th>Cost Title</th>
                    <th>Platform</th>
                    <th>Partner Name</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((e) => (
                    <tr key={e.license_id}>
                      <td>{e.license_sn}</td>
                      <td>{e.license_license}</td>
                      <td>{e.license_expires}</td>
                      <td>{e.license_createdAt}</td>
                      <td>{e.cost_title}</td>
                      <td>{e.cost_platform}</td>
                      <td>{e.partner_name}</td>
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

export default LicensesList;
