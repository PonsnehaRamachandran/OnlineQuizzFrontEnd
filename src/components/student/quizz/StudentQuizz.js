import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { fetchQuizz } from '../../../store';
import { NavLink } from 'react-router-dom';
import useThunk from '../../../hooks/use-thunk';

function StudentQuizz(props) {
  const [dofetchQuizz, isLoadingQuizz, loadingQuizzError] = useThunk(fetchQuizz);
  const { data } = useSelector((state) => state.quizz);
  const [attemptedQuizzes, setAttemptedQuizzes] = useState(() => {
    // Retrieve the attempted quizzes from localStorage
    const attemptedQuizzesString = localStorage.getItem('attemptedQuizzes');
    return attemptedQuizzesString ? JSON.parse(attemptedQuizzesString) : [];
  });
  useEffect(() => {
    dofetchQuizz();
  }, [dofetchQuizz]);
  if (isLoadingQuizz) {
    return <div>Loading...</div>;
  }
  if (loadingQuizzError) {
    return <div>Error fetching data...</div>;
  }
  const MAX_ATTEMPTS = 2;
  const handleQuizCompletion = (quizId) => {
    setAttemptedQuizzes((prevAttemptedQuizzes) => {
      const numAttempts = prevAttemptedQuizzes.filter((id) => id === quizId).length;
      if (numAttempts >= MAX_ATTEMPTS) {
        alert(`You have already attempted this quiz ${MAX_ATTEMPTS} times.`);
        return prevAttemptedQuizzes;
      }
      const updatedAttemptedQuizzes = [...prevAttemptedQuizzes, quizId];
      // Save the updated attemptedQuizzes state to localStorage
      localStorage.setItem('attemptedQuizzes', JSON.stringify(updatedAttemptedQuizzes));
      return updatedAttemptedQuizzes;
    });
  };

  return (
    <>
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand d-flex align-items-center" href="/student">
            <img src="https://as1.ftcdn.net/v2/jpg/02/09/95/42/500_F_209954204_mHCvAQBIXP7C2zRl5Fbs6MEWOEkaX3cA.jpg" alt="Logo" height="50" width="50" className="me-2" />
            <h3 className="text-light mb-0">Online Assessment Portal</h3>
          </a>
          <div className="ml-auto">
            <NavLink to="/ViewSubject">
              <button className="btn btn-dark">Subjects</button>
            </NavLink>
            <NavLink to="/StudentResult">
              <button className="btn btn-dark">
                <span>My Result</span>
              </button>
            </NavLink>
          </div>
        </nav>
        &nbsp;
        <h2 align="center">Quizzes</h2>
      </div>
      <hr />
      <div className="container">
        <div className="row ">
          {data.map((q) => (
            <div className="col-md-4 mb-3" key={q.id}>
              <div className="card">
                <div className="card-body ">
                  <h5 className="card-title">{q.description}</h5>
                  <p className="card-text">
                    <strong>Total Marks:</strong> {q.marks}
                    <br />
                    <strong>Total Questions:</strong> {q.totalQuestion}
                    <br />
                    <strong>Passing Marks:</strong> {q.passMarks}
                  </p>
                  {attemptedQuizzes.filter((id) => id === q.id).length >= MAX_ATTEMPTS ? (
                    <button className="btn btn-danger" disabled>
                      Attempted {MAX_ATTEMPTS} times
                    </button>
                  ) : (
                    <NavLink exact to={`/StudentQuizz/${q.id}/questions`} onClick={() => handleQuizCompletion(q.id)}>
                      <button className="btn btn-danger">Go to Quizz</button>
                    </NavLink>
                  )}

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default StudentQuizz;
