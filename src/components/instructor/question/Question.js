import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import useThunk from "../../../hooks/use-thunk";
import { fetchQuestion } from "../../../store";

export default function Question() {
  const [dofetchQuestion, isLoadingQuestion, loadingQuestionError] = useThunk(fetchQuestion);
  const { data } = useSelector((state) => {
    return state.question;
  });
  useEffect(() => {
    dofetchQuestion()
  }, [dofetchQuestion]);

  if (isLoadingQuestion) {
    return <div> Loading...</div>;
  }
  if (loadingQuestionError) {
    return <div>Error fetching data...</div>;
  }
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
      <br></br>

      <h2 align="center">QuestionList</h2>
      <div className="container">
        <div className="py-4">
          <table className="table table-striped">
            <thead >
              <tr>
                <th>S.NO</th>
                <th>QuestionId</th>
                <th>Subject</th>
                <th> QuestionTitle</th>
                <th>Question</th>
                <th>OptionOne</th>
                <th>OptionTwo</th>
                <th>OptionThree</th>
                <th>OptionFour</th>
                <th>Answer</th>
                <th>Mark</th>
                <th>Level</th>
              </tr>
            </thead>
            <tbody>
              {data.map((question, i) => (
                <tr>
                  <th scope="row" key={i}>
                    {i + 1}
                  </th>
                  <td>
                    {question.questionId}
                  </td>
                  <td>
                    {question.subject.subjectId}
                  </td>
                  <td>
                    {question.questionTitle}
                  </td>
                  <td>
                    {question.question}
                  </td>
                  <td>
                    {question.optionOne}
                  </td>
                  <td>
                    {question.optionTwo}
                  </td>
                  <td>
                    {question.optionThree}
                  </td>
                  <td>
                    {question.optionFour}
                  </td>
                  <td>
                    {question.answer}
                  </td>
                  <td>
                    {question.mark}
                  </td>
                  <td>
                    {question.levelOfDifficulty}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}