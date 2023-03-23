import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchResult } from '../../../store';
import useThunk from '../../../hooks/use-thunk';
export default function Result() {
  const [dofetchResult, isLoadingResult, loadingResultError] = useThunk(fetchResult);
  const { data } = useSelector((state) => state.result);

  useEffect(() => {
    dofetchResult();
  }, [dofetchResult]);

  if (isLoadingResult) {
    return <div>Loading...</div>;
  }
  if (loadingResultError) {
    return <div>Error fetching data...</div>;
  }
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="d-flex justify-content-between align-items-center w-100">
          <a className="navbar-brand d-flex align-items-center" href="/instructor">
            <img src="https://as1.ftcdn.net/v2/jpg/02/09/95/42/500_F_209954204_mHCvAQBIXP7C2zRl5Fbs6MEWOEkaX3cA.jpg" alt="Logo"
              height="50" width="50" className="me-2" />
            <h3 className="text-light mb-0">Online Assessment Portal</h3>
          </a>
        </div>
      </nav>
      <div className="container mt-3">
        <div>
          <h2 className="text-center">All Results</h2>
        </div><hr />
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Username</th>
              <th>Quiz description</th>
              <th>Total questions</th>
              <th>Total Marks</th>
              <th>Marks Obtained</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((result, index) => (
                <tr key={index}>
                  <td>{result.user && result.user.userName}</td>
                  <td>{result.quizzId.description}</td>
                  <td>{result.totalQuestion}</td>
                  <td>{result.totalMarks}</td>
                  <td>{result.resultScore}</td>
                  <td className={result.resultStatus === "Pass" ? "text-success" : "text-danger"}>
                    {result.resultStatus}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">No results found.</td>
              </tr>
            )}
          </tbody>
        </table>

      </div>
    </div>
  );
}