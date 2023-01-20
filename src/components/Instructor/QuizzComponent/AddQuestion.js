import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate,NavLink, useParams } from 'react-router-dom';

function AddQuestion() {
  const { id } = useParams();
  const navigate = useNavigate();
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
    subject:0
  });


  const onInputChange = (e) => {
    setQuestion({ ...question, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    setQuestion({
        ...question,
        quizz:id
      }); 

      await axios.post('http://localhost:8080/api/questions', question);
      navigate("/Quizz");
   
}

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <h1 className="text-center text-danger">Add New Question</h1>
        </div>
        <div className="card-body">
          <form onSubmit={(e) => onSubmit(e)}>
            <label className="d-flex justify-content-around">
              Subject Name:
            </label>
            <br />
            <input
              className="form-control"
              type="text"
              name="questionTitle"
              placeholder="Enter Question Title"
              value={question.questionTitle}
              onChange={onInputChange}
            />
            <br />
            <label className="d-flex justify-content-around">Question:</label>
            <br />
            <input
              className="form-control"
              type="text"
              name="question"
              placeholder="Enter Question"
              value={question.question}
              onChange={onInputChange}
            />
            <br />
            <label className="d-flex justify-content-around">
              Option one:
            </label>
            <br />
            <input
              className="form-control"
              type="text"
              name="optionOne"
              placeholder="Enter Option one"
              value={question.optionOne}
              onChange={onInputChange}
              />
              <br />
              <label className="d-flex justify-content-around">
                Option two:
              </label>
              <br />
              <input
                className="form-control"
                type="text"
                name="optionTwo"
                placeholder="Enter option Two"
                value={question.optionTwo}
                onChange={onInputChange}
              />
              <br />
              <label className="d-flex justify-content-around">
                Option three:
              </label>
              <br />
              <input
                className="form-control"
                type="text"
                name="optionThree"
                placeholder="Enter option three"
                value={question.optionThree}
                onChange={onInputChange}
              />
              <br />
              <label className="d-flex justify-content-around">
                Option four:
              </label>
              <br />
              <input
                className="form-control"
                type="text"
                name="optionFour"
                placeholder="Enter option four"
                value={question.optionFour}
                onChange={onInputChange}
              />
              <br />
              <label className="d-flex justify-content-around">Answer:</label>
              <br />
              <input
                className="form-control"
                type="text"
                name="answer"
                placeholder="Enter answer"
                value={question.answer}
                onChange={onInputChange}
              />
              <br />
              <label className="d-flex justify-content-around">Mark:</label>
              <br />
              <input
                className="form-control"
                type="number"
                name="mark"
                placeholder="Enter mark"
                value={question.mark}
                onChange={onInputChange}
              />
              <br />
              <label className="d-flex justify-content-around">
                Level of difficulty:
              </label>
              <br />
              <input
                className="form-control"
                type="text"
                name="levelOfDifficulty"
                placeholder="Enter level of difficulty"
                value={question.levelOfDifficulty}
                onChange={onInputChange}
              />
              <br />
              <br />
             
<label className='d-flex justify-content-around'>Subject:</label><br />
<input
    className='form-control'
    type='number'
    name='subject'
    placeholder='Enter Subject'
    value={question.subject.subjectId}
    onChange={(e) => onInputChange(e)}
/><br />

              <input
                className="form-control btn btn-danger"
                type="submit"
                value="Add question"
              />
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




