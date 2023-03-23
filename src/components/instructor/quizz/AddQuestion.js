import { useParams } from 'react-router-dom';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { addQuestion } from '../../../store';
import useThunk from '../../../hooks/use-thunk';

function AddQuestion() {
  const navigate = useNavigate();
  const [doaddQuestion, isCreatingQuestion] = useThunk(addQuestion);
  const { id } = useParams();
  const [question, setQuestion] = useState({
    questionTitle: "",
    question: "",
    optionOne: "",
    optionTwo: "",
    optionThree: "",
    optionFour: "",
    answer: "",
    mark: "",
    levelOfDifficulty: "",
    quizz: id,
    subject: 0
  });

  const onInputChange = (event) => {
    setQuestion({ ...question, [event.target.name]: event.target.value });
  };
  const [error, setError] = useState("");
  const onSubmit = (event) => {
    event.preventDefault();
    if (Object.values(question).some(val => val === "")) {
      setError("Please fill all fields");
    } else {
      doaddQuestion(question);
      navigate('/Quizz');
    }
  };
  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <h1 className="text-center text-danger">Add New Question</h1>
        </div>
        <div className="card-body">
          {error && <div className="alert alert-danger">{error}</div>}
          <form onSubmit={onSubmit}>
            <label ><strong>Subject Name:</strong></label>
            <br />
            <input className="form-control" type="text" name="questionTitle"
              value={question.questionTitle}
              onChange={onInputChange}
            />
            <br />
            <label ><b>Question:</b></label>
            <br />
            <input
              className="form-control"
              type="text"
              name="question"
              value={question.question}
              onChange={onInputChange}
            />
            <br />
            <label ><b>
              Option One:</b>
            </label>
            <br />
            <input
              className="form-control"
              type="text"
              name="optionOne"
              value={question.optionOne}
              onChange={onInputChange}
            />
            <br />
            <label><b>
              Option two:</b>
            </label>
            <br />
            <input
              className="form-control"
              type="text"
              name="optionTwo"
              value={question.optionTwo}
              onChange={onInputChange}
            />
            <br />
            <label ><b>
              Option three:</b>
            </label>
            <br />
            <input
              className="form-control"
              type="text"
              name="optionThree"
              value={question.optionThree}
              onChange={onInputChange}
            />
            <br />
            <label ><b>
              Option four:</b>
            </label>
            <br />
            <input
              className="form-control"
              type="text"
              name="optionFour"
              value={question.optionFour}
              onChange={onInputChange}
            />
            <br />
            <label ><b>Answer:</b></label>
            <br />
            <input
              className="form-control"
              type="text"
              name="answer"
              value={question.answer}
              onChange={onInputChange}
            />
            <br />
            <label ><b>Mark:</b></label>
            <br />
            <input
              className="form-control"
              type="number"
              name="mark"
              value={question.mark}
              onChange={onInputChange}
            />
            <br />
            <label ><b>
              Level of difficulty:</b>
            </label>
            <br />
            <input
              className="form-control"
              type="text"
              name="levelOfDifficulty"
              value={question.levelOfDifficulty}
              onChange={onInputChange}
            />
            <br />
            <br />

            <label ><b>SubjectId:</b></label><br />
            <input
              className='form-control'
              type='number'
              name='subject'
              value={question.subject === 0 ? "" : question.subject}
              onChange={(e) => onInputChange(e)}
            /><br />
            <input
              className=" btn btn-danger"
              type="submit"
              value="Add question"
              disabled={isCreatingQuestion}
            />&nbsp;
            {isCreatingQuestion && <div className="text-center">Creating Question...</div>}
            <Link to="/Quizz" className="btn btn-primary">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddQuestion;



