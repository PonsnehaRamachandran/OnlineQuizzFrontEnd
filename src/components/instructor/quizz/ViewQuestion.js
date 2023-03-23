import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { deleteQuestion, fetchQuestionbyQuizzId } from '../../../store';
import useThunk from '../../../hooks/use-thunk';
import { useSelector } from 'react-redux';
import baseUrl from '../../baseUrl';
function ViewQuestion(props) {

  const { id } = useParams();
  const [dodeleteQuestion, isDeletingQuestion] = useThunk(deleteQuestion);
  const [dofetchQuestionById] = useThunk(fetchQuestionbyQuizzId);
  const { data } = useSelector((state) => state.question);

  useEffect(() => {
    dofetchQuestionById(id);
    console.log(data);
  }, [dofetchQuestionById, id]); // eslint-disable-line react-hooks/exhaustive-deps
  ///////Edit quesiion///////
  const [display, setDisplay] = useState({
    display:
      "none"
  }
  );
  function handleEditQuestion(questionId) {
    setDisplay({ display: "block" });
    setDataInInputField(questionId);
  }

  function handleClose() {
    setDisplay({ display: "none" });
  }
  //  ---------------------- handling text field -------------------------------------
  const [updatedQ, setUpdatedQ] = useState({
    question: "",
    optionOne: "",
    optionTwo: "",
    optionThree: "",
    optionFour: "",
    answer: "",
    quizz: id,
    subject: 0,
    mark: "",
    levelOfDifficulty: ""
  });
  function onTextFieldChange(e) {
    setUpdatedQ({
      ...updatedQ,
      [e.target.name]: e.target.value
    })
  }
  //  ---------------------- Showing data in text field -------------------------------------
  // Id of current question clicked
  const [qId, setQId] = useState();
  function setDataInInputField(questionId) {
    setQId(questionId);
    for (let i = 0; i < data.length; i++) {
      if (parseInt(data[i].questionId) === parseInt(questionId)) {
        setUpdatedQ(data[i]);
      }
    }
  }
  // -----------------------------------------------------------------------------------------
  const [check, setCheck] = useState();
  async function updateQuestion() {
    await axios.put(`${baseUrl}/api/questions/${qId}`, updatedQ);
    setCheck(true);
  }
  if (check) return <ViewQuestion />;
  ////////////////////handle delete////////////
  const handleDeleteQuestion = (question) => {
    dodeleteQuestion(question);
  };
  return (

    <div >
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand d-flex align-items-center" href="/Quizz">
          <img src="https://as1.ftcdn.net/v2/jpg/02/09/95/42/500_F_209954204_mHCvAQBIXP7C2zRl5Fbs6MEWOEkaX3cA.jpg" alt="Logo"
            height="50" width="50" className="me-2" />
          <h3 className="text-light mb-0">Online Assessment Portal</h3>
        </a>
      </nav>
      <br>
      </br>
      <br>
      </br>
      <h2 align="center">Questions</h2>
      <hr></hr>
      <div className="container py-4">
        <table className="table table-striped">
          <thead >
            <tr>
              <th>S.NO</th>
              <th>QuestionTitle</th>
              <th>Question</th>
              <th>Option1</th>
              <th>Option2</th>
              <th>Option3</th>
              <th>Option4</th>
              <th>Answer</th>
              <th>Mark</th>
              <th>Level</th>
              <th className='text-center'>Action</th>
            </tr>
          </thead>

          <tbody>
            {data.map((question, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{question.questionTitle}</td>
                <td>{question.question}</td>
                <td>{question.optionOne}</td>
                <td>{question.optionTwo}</td>
                <td>{question.optionThree}</td>
                <td>{question.optionFour}</td>
                <td>{question.answer}</td>
                <td>{question.mark}</td>
                <td>{question.levelOfDifficulty}</td>
                <td>
                  <div className="d-flex justify-content-between">
                    <button
                      className="btn btn-danger"
                      loading={isDeletingQuestion}
                      onClick={() => handleDeleteQuestion(question)}>Delete
                    </button>&nbsp;
                    <button
                      onClick={() => handleEditQuestion(question.questionId)}
                      className="btn btn-primary">Edit
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div style={display} className="container" >
        <label className='d-flex justify-content-around'>Update Question:</label>
        <input
          className='form-control'
          type='text'
          name='question'
          placeholder='Enter Question'
          value={updatedQ.question}
          onChange={(e) => onTextFieldChange(e)}
        /><br />
        <label className='d-flex justify-content-around'>Update Option One:</label>
        <input
          className='form-control'
          type='text'
          name='optionOne'
          placeholder='Option One'
          value={updatedQ.optionOne}
          onChange={(e) => onTextFieldChange(e)}
        /><br />
        <label className='d-flex justify-content-around'>Update OptionTwo:</label>
        <input
          className='form-control'
          type='text'
          name='optionTwo'
          placeholder='Enter Option Two'
          value={updatedQ.optionTwo}
          onChange={(e) => onTextFieldChange(e)}
        /><br />
        <label className='d-flex justify-content-around'>Update Option Three:</label>
        <input
          className='form-control'
          type='text'
          name='optionThree'
          placeholder='Enter Option Three'
          value={updatedQ.optionThree}
          onChange={(e) => onTextFieldChange(e)}
        /><br />
        <label className='d-flex justify-content-around'>Update Option Four:</label>
        <input
          className='form-control'
          type='text'
          name='optionFour'
          placeholder='Enter Option Four'
          value={updatedQ.optionFour}
          onChange={(e) => onTextFieldChange(e)}
        /><br />
        <label className='d-flex justify-content-around'>Update Answer:</label>
        <input
          className='form-control'
          type='text'
          name='answer'
          placeholder='Enter Answer'
          value={updatedQ.answer}
          onChange={(e) => onTextFieldChange(e)}
        /><br />
        <label className='d-flex justify-content-around'>Update Mark:</label>
        <input
          className='form-control'
          type='text'
          name='mark'
          placeholder='Enter the mark'
          value={updatedQ.mark}
          onChange={(e) => onTextFieldChange(e)}
        /><br />
        <label className='d-flex justify-content-around'>Update level Of Difficulty:</label>
        <input
          className='form-control'
          type='text'
          name='levelOfDifficulty'
          placeholder='Enter levelOfDifficulty'
          value={updatedQ.levelOfDifficulty}
          onChange={(e) => onTextFieldChange(e)}
        /><br />
        <div >
          <button className='btn btn-primary mx-2' onClick={updateQuestion} >Update Question</button>
          <button className='btn btn-danger' onClick={handleClose} >Close</button>
        </div>
      </div>
    </div>
  );
}

export default ViewQuestion;