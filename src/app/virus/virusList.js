import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {virusFetch} from "../../store/action/virus";

const VirusList = () => {
  const virus = useSelector((state) => state.virus);
  const {
    user: {token},
  } = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(virusFetch(token));
  }, [dispatch]);
  return (
    <div>
      <div className="page-header">
        <h3 className="page-title">Virus</h3>
      </div>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Virus Details</h4>
          <div className="table-responsive">
            <table className="table">
              <thead>
                {/* {partner.partners.map((part) => ( */}
                <tr>
                  <th>Name</th>
                  <th>Code</th>
                  <th>Description</th>
                  <th>Created Date</th>
                </tr>
                {/* ))} */}
              </thead>
              <tbody>
                {virus.virus.map((licens) => (
                  <tr key={licens.id}>
                    <td>{licens.name}</td>
                    <td>{licens.code}</td>
                    <td>{licens.description}</td>
                    <td>{licens.createdAt}</td>
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

export default VirusList;
