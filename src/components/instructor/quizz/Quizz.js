import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { deleteQuizz, fetchQuizz } from '../../../store';
import { NavLink } from 'react-router-dom';
import useThunk from '../../../hooks/use-thunk';

export default function Quizz() {
  const [dofetchQuizz, isLoadingQuizz, loadingQuizzError] = useThunk(fetchQuizz);
  const [dodeleteQuizz, isDeletingQuizz] = useThunk(deleteQuizz);
  const { data } = useSelector((state) => state.quizz);
  useEffect(() => {
    dofetchQuizz();
  }, [dofetchQuizz]);
  if (isLoadingQuizz) {
    return <div>Loading...</div>;
  }
  if (loadingQuizzError) {
    return <div>Error fetching data...</div>;
  }

  ////////////////////////////Delete///////////////////////
  const handleDeleteQuizz = (quizz) => {
    dodeleteQuizz(quizz);
  };

  ///////////////////Viewing quizz///////////
  return (
    <div>
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand d-flex align-items-center" href="/instructor">
              <img src="https://as1.ftcdn.net/v2/jpg/02/09/95/42/500_F_209954204_mHCvAQBIXP7C2zRl5Fbs6MEWOEkaX3cA.jpg" alt="Logo" height="50" width="50" className="me-2" />
              <h3 className="text-light mb-0">Online Assessment Portal</h3>
            </a>
            <div className="d-flex justify-content-end">
              <NavLink to="/Subject">
                <button className="btn btn-dark">
                  <span>Subject</span>
                </button>
              </NavLink>
              <NavLink to="/Question">
                <button className="btn btn-dark">
                  <span>Question</span>
                </button>
              </NavLink>
              <NavLink to="/Quizz">
                <button className="btn btn-dark">
                  <span>Quizz</span>
                </button>
              </NavLink>
              <NavLink to="/Result">
                <button className="btn btn-dark">
                  <span>Result</span>
                </button>
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
      <div className="container">
        <br />
        <h2 align="center">QuizzList</h2>
        <hr />
        <div className="py-4">
          <table className="table table-striped">
            <thead >
              <tr>
                <th>S.No</th>
                <th>QuizzId</th>
                <th>SubjectId</th>
                <th>Quizz Description</th>
                <th >Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((quizz, index) => (
                <tr key={quizz.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{quizz.id}</td>
                  <td>{quizz.subject && quizz.subject.subjectId ? quizz.subject.subjectId : 'N/A'}</td>
                  <td>{quizz.description}</td>
                  <td>
                    <NavLink exact to={`/Quizz/QuizzDetails/${quizz.id}`}>
                      <button className="btn btn-outline-primary">Details</button>
                    </NavLink>
                    &nbsp;&nbsp;&nbsp;
                    <NavLink exact to={`/Quizz/AddQuestion/${quizz.id}`}>
                      <button className="btn btn-outline-danger">Add Question</button>
                    </NavLink> &nbsp;&nbsp;&nbsp;
                    <NavLink exact to={`/Quizz/ViewQuestion/${quizz.id}`}>
                      <button className="btn btn-outline-dark">View Question</button>
                    </NavLink> &nbsp;&nbsp;&nbsp;
                    <button
                      className="btn btn-danger mx-2"
                      loading={isDeletingQuizz}
                      onClick={() => handleDeleteQuizz(quizz)}
                    > Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <NavLink exact to="/AddQuizz">
          <button className="btn btn-primary" > <span>  Add Quizz </span></button>
        </NavLink>
      </div>
    </div>
  );
}