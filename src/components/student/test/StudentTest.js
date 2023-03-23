import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';
import baseUrl from '../../baseUrl';
import './StudentTest.css';

function StudentTest(props) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [allQuestions, setAllQuestions] = useState([]);
  const [answer, setAnswer] = useState([]);
  useEffect(() => {
    async function getAllQuestions() {
      const value = await axios.get(`${baseUrl}/api/quizz/${id}/questions`);
      setAllQuestions(value.data);
    }
    getAllQuestions();
  }, [id]);

  function onRadioButtonChange(e, index) {
    const val = e.target.value;
    const responses = [...answer];
    responses[index] = val;
    setAnswer(responses);
  }

  async function submitTest() {
    let count = allQuestions.length;
    let correctAnswer = [];
    let score = 0;
    let total = 0;
    let status = "";
    for (let i = 0; i < count; i++) {
      correctAnswer.push(allQuestions[i].answer);
    }
    for (let i = 0; i < count; i++) {
      if (answer[i].trim() === correctAnswer[i]) {
        if (allQuestions[i].levelOfDifficulty === "EASY") {
          score += 1;
          total += 1;
        }
        if (allQuestions[i].levelOfDifficulty === "MEDIUM") {
          score += 2;
          total += 2;
        }
        if (allQuestions[i].levelOfDifficulty === "HARD") {
          score += 3;
          total += 3;
        }
      } else {
        if (allQuestions[i].levelOfDifficulty === "EASY") {
          total += 1;
        }
        if (allQuestions[i].levelOfDifficulty === "MEDIUM") {
          total += 2;
        }
        if (allQuestions[i].levelOfDifficulty === "HARD") {
          total += 3;
        }
      }
    }

    status = score >= 0.65 * total ? "Pass" : "Fail";
    const user = JSON.parse(localStorage.getItem("user"));
    const data = {
      resultStatus: status,
      totalMarks: total,
      totalQuestion: count,
      resultScore: score,
      quizzId: parseInt(id),
      user: user,
    };
    await axios.post(`${baseUrl}/api/results`, data);
    navigate(`/StudentResult`);
  }

  return (
    <div>
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand d-flex align-items-center" href="/">
            <img src="https://as1.ftcdn.net/v2/jpg/02/09/95/42/500_F_209954204_mHCvAQBIXP7C2zRl5Fbs6MEWOEkaX3cA.jpg" alt="Logo" height="50" width="50" className="me-2" />
            <h3 className="text-light mb-0">Online Assessment Portal</h3>
          </a>
        </nav>
      </div>
      <hr></hr>
      <div className="container">
        <div>
          <h2 className="text-center">Answer all the questions</h2>
        </div>
        <hr />
        {allQuestions.map((data, index) => {
          const questionNum = index + 1;
          return (
            <div key={index}>
              <div >
                <h5> {questionNum}. {data.question}</h5>
                <div>
                  <input
                    onChange={(e) => onRadioButtonChange(e, index)}
                    value={data.optionOne}
                    name={`question${index}`}
                    type="radio"
                    id={`question${index}option1`}
                  />
                  <label htmlFor={`question${index}option1`} >
                    {data.optionOne}
                  </label>
                </div>
                <div>
                  <input
                    onChange={(e) => onRadioButtonChange(e, index)}
                    value={data.optionTwo}
                    name={`question${index}`}
                    type="radio"
                    id={`question${index}option2`}
                  />
                  <label htmlFor={`question${index}option2`}>
                    {data.optionTwo}
                  </label>
                </div>
                <div>
                  <input
                    onChange={(e) => onRadioButtonChange(e, index)}
                    value={data.optionThree}
                    name={`question${index}`}
                    type="radio"
                    id={`question${index}option3`}
                  />
                  <label htmlFor={`question${index}option3`}>
                    {data.optionThree}
                  </label>
                </div>
                <div>
                  <input
                    onChange={(e) => onRadioButtonChange(e, index)}
                    value={data.optionFour}
                    name={`question${index}`}
                    type="radio"
                    id={`question${index}option4`}
                  />
                  <label htmlFor={`question${index}option4`} >
                    {data.optionFour}
                  </label>
                </div>
                <br />
              </div>
            </div>
          );
        })}
        <div>
          <button className="btn btn-primary mx-2" onClick={submitTest}>
            Submit Exam
          </button>
          <Link to="/StudentQuizz" className="btn btn-danger mx-2">
            Cancel
          </Link>
        </div>
      </div>
    </div>

  );
}

export default StudentTest;
