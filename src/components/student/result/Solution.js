import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchQuestionbyQuizzId } from '../../../store';
import useThunk from '../../../hooks/use-thunk';
import { useSelector } from 'react-redux';
import './Solution.css';

function Solution(props) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [dofetchQuestionById] = useThunk(fetchQuestionbyQuizzId);
  const { data } = useSelector((state) => state.question);
  useEffect(() => {
    dofetchQuestionById(id);
  }, [dofetchQuestionById, id]);
  function handleGoBack() {
    navigate('/StudentResult');
  }

  return (
    <div>
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand d-flex align-items-center" href="/StudentResult">
            <img src="https://as1.ftcdn.net/v2/jpg/02/09/95/42/500_F_209954204_mHCvAQBIXP7C2zRl5Fbs6MEWOEkaX3cA.jpg" alt="Logo" height="50" width="50" className="me-2" />
            <h3 className="text-light mb-0">Online Assessment Portal</h3>
          </a>
        </nav>
      </div>
      <br />
      <div className="container">
        <div>
          <h2 className="text-center">Solutions</h2>
        </div>
        <hr />
        {data.map((question, index) => {
          const questionNum = index + 1;
          return (
            <div key={question.questionId}>
              <div>
                <h5>
                  {questionNum}. {question.question}
                </h5>
                <div className="solution-options">
                  <p>
                    a.{question.optionOne}
                    {question.optionOne === question.answer && (
                      <span style={{ color: 'green', fontWeight: 'bold' }}> (Correct Answer)</span>
                    )}
                  </p>
                  <p>
                    b.{question.optionTwo}
                    {question.optionTwo === question.answer && (
                      <span style={{ color: 'green', fontWeight: 'bold' }}> (Correct Answer)</span>
                    )}
                  </p>
                  <p>
                    c.{question.optionThree}
                    {question.optionThree === question.answer && (
                      <span style={{ color: 'green', fontWeight: 'bold' }}> (Correct Answer)</span>
                    )}
                  </p>
                  <p>
                    d.{question.optionFour}
                    {question.optionFour === question.answer && (
                      <span style={{ color: 'green', fontWeight: 'bold' }}> (Correct Answer)</span>
                    )}
                  </p>
                </div>
                <br />
              </div>
            </div>
          );
        })}
        <div>
          <button className="btn btn-primary mx-2" onClick={handleGoBack}>
            Go back
          </button>
        </div>
      </div>
    </div>
  );
}

export default Solution;
