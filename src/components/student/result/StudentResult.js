import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchResultByUsername } from "../../../store";
import useThunk from "../../../hooks/use-thunk";
import { useSelector } from "react-redux";

function StudentResult() {
 
  const [userName, setUserName] = useState("");
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedUserName = storedUser.userName;
    setUserName(storedUserName);
  }, []);
  const [dofetchResultByUser] = useThunk(fetchResultByUsername);
  const { data } = useSelector((state) => {
    return state.result;
  });
  useEffect(() => {
    dofetchResultByUser(userName);
  }, [dofetchResultByUser, userName]);
  
  return (
    <>
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand d-flex align-items-center" href="/StudentQuizz">
            <img src="https://as1.ftcdn.net/v2/jpg/02/09/95/42/500_F_209954204_mHCvAQBIXP7C2zRl5Fbs6MEWOEkaX3cA.jpg" alt="Logo" height="50" width="50" className="me-2" />
            <h3 className="text-light mb-0">Online Assessment Portal</h3>
          </a>
        </nav>
      </div>
      <br />
      <div className="container">
        <div>
          <h2 className="text-center">Student Results</h2>
        </div>
        <hr />
        <div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>UserName</th>
                <th>Quizz Id</th>
                <th>Result Score</th>
                <th>Total Marks</th>
                <th>Result Status</th>
                <th>Solutions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((data, i) => {
                console.log(data);
                return (
                  <tr key={i}>
                    <td>{data.user.userName}</td>
                    <td>{data.quizzId.description}</td>
                    <td>{data.resultScore}</td>
                    <td>{data.totalMarks}</td>
                    <td className={data.resultStatus === "Pass" ? "text-success" : "text-danger"}>
                      {data.resultStatus}</td>
                    <td>
                      <Link to={`/StudentQuizz/${data.quizzId.id}/questions/solution`}>
                        View Solution
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default StudentResult;
