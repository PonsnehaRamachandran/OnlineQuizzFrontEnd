import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {  useEffect } from "react";
import './InstructorDashboard.css';
import useThunk from '../../hooks/use-thunk';
import { fetchQuestion, fetchQuizz } from '../../store';
import { useSelector } from 'react-redux';

function InstructorDashboard(props) {
  const navigate = useNavigate();
  function handleGoBack() {
    navigate("/");
  }
 const [dofetchQuizz] = useThunk(fetchQuizz);
 const quizz = useSelector(state => state.quizz);
 const [dofetchQuestion] = useThunk(fetchQuestion);
 const question = useSelector( state => state.question);
 
  useEffect(() => {
    dofetchQuestion()
  }, [dofetchQuestion]);

  useEffect(() => {
    dofetchQuizz()
  }, [dofetchQuizz]);
  function showQuizz() {
    navigate("/Quizz");
  }
  function showQuestions() {
    navigate("/Question");
  }
  return (
    <div>
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand d-flex align-items-center" href="/">
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
              <button className="btn btn-dark" onClick={handleGoBack}>
                <span>Logout</span>
              </button>
            </div>
          </div>
        </nav>
      </div>
      <br></br>
      <div className='container'>
        <hr />
        <br></br>
        <div className='row'>
          <div className='col-5 table-bordered mx-4 card'>
            <h3 className='text-center'>We have total {quizz.data.length} quizzes</h3><br></br>
            <div className="text-center">
              <button className="btn btn-danger" onClick={showQuizz}>View Details</button>
            </div>
            <br></br>
          </div>
          <div className='col-5 table-bordered card'>
            <h3 className='text-center'>We have total {question.data.length} questions</h3><br></br>
            <div className="text-center">
              <button className="btn btn-danger" onClick={showQuestions}>View Details</button>
              <br></br>
            </div>
            <br></br>
          </div>
        </div>
      </div></div>
  );

}
export default InstructorDashboard;