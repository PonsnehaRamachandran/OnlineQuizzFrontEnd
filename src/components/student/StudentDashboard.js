import './StudentDashboard.css';
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function StudentDashboard(props) {
  let navigate = useNavigate();
  function handleGoBack() {
    navigate("/");
  }
  return (
    <div> <div>
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img src="https://as1.ftcdn.net/v2/jpg/02/09/95/42/500_F_209954204_mHCvAQBIXP7C2zRl5Fbs6MEWOEkaX3cA.jpg" alt="Logo" height="50" width="50" className="me-2" />
          <h3 className="text-light mb-0">Online Assessment Portal</h3>
        </a>
        <button className="btn btn-dark ml-auto" onClick={handleGoBack}>
          Logout
        </button>
      </nav>
    </div>
      <div className="container border p-3 mt-4">
        <h4 className="mb-4"><strong>Instructions for Students:</strong></h4>
        <ol className="text-justify">
          <li><strong>Read the instructions carefully:</strong> Before starting the assessment, make sure to read the instructions provided by the portal. This will help you understand how to answer the questions and how much time you have to complete the assessment.</li>
          <li><strong>Prepare in advance: </strong>If you know that you will be taking an assessment, try to prepare for it in advance. This may involve studying the material or practicing similar questions to those that will be asked on the assessment.</li>
          <li><strong>Check your internet connection:</strong> Make sure that you have a stable internet connection before starting the assessment. A slow or intermittent connection may cause the portal to malfunction or lose your progress.</li>
          <li><strong>Avoid distractions:</strong> Find a quiet place to take the assessment where you won't be distracted by noise or other people. This will help you focus on the questions and answer them more accurately.</li>
          <li><strong>Save your progress: </strong>If the assessment allows you to save your progress, make sure to save it periodically. This will help you avoid losing your progress if there are any technical issues or if you need to take a break.</li>
          <li><strong>Submit your answers before the deadline:</strong> Make sure to submit your answers before the deadline provided by the portal. If you miss the deadline, you may not be able to submit your answers or receive credit for the assessment.</li>
          <li><strong>Review your answers:</strong> If the portal allows you to review your answers before submitting them, take the time to do so. This will help you catch any mistakes or errors that you may have made and improve your score.</li>
        </ol>
      </div>
      <div className="container mt-4">
        <NavLink to="/StudentQuizz">
          <button className="btn btn-danger mx-auto d-block">Go to Quizzes</button>
        </NavLink>
      </div>
    </div>
  );
}

export default StudentDashboard;