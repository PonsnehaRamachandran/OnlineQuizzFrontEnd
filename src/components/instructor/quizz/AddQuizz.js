import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addQuizz } from '../../../store';
import useThunk from '../../../hooks/use-thunk';
import React from 'react';

function AddQuizz(props) {
  const navigate = useNavigate();
  const [doaddQuizz, isCreatingQuizz] = useThunk(addQuizz);
  const [quizz, setQuizz] = useState({
    subject: 0,
    description: "",
    marks: "",
    totalQuestion: "",
    passMarks: ""
  });
  const onInputChange = (event) => {
    setQuizz({ ...quizz, [event.target.name]: event.target.value });
  };
  const [error, setError] = useState("");
  const onSubmit = (event) => {
    event.preventDefault();
    if (Object.values(quizz).some(val => val === "")) {
      setError("Please fill all fields");
    } else {
      doaddQuizz(quizz);
      navigate('/Quizz');
    }
  };
  function handleGoBack() {
    navigate("/Quizz");
  }

  return (
    <div className='container'>
      <div className='card'>
        <div className='card-header'>
          <h1 className='text-center text-danger'>
            Add New Quizz
          </h1>
        </div>
        <div className='card-body '>
          {error && <div className="alert alert-danger">{error}</div>}
          <form onSubmit={(e) => onSubmit(e)}>
            <label ><b>Subject:</b></label><br />
            <input
              className='form-control'
              type='number'
              name='subject'
              value={quizz.subject === 0 ? "" : quizz.subject}
              onChange={(e) => onInputChange(e)}
            /><br />
            <label ><b>Description:</b></label><br />
            <input
              className='form-control'
              type='text'
              name='description'
              value={quizz.description}
              onChange={(e) => onInputChange(e)}
            /><br />
            <label><b>Marks:</b></label><br />
            <input
              className='form-control'
              type='text'
              name='marks'
              value={quizz.marks}
              onChange={(e) => onInputChange(e)}
            /><br />
            <label ><b>Total Question:</b></label><br />
            <input
              className='form-control'
              type='text'
              name='totalQuestion'
              value={quizz.totalQuestion}
              onChange={(e) => onInputChange(e)}
            /><br />
            <label><b>Passmarks:</b></label><br />
            <input
              className='form-control'
              type='text'
              name='passMarks'
              value={quizz.passMarks}
              onChange={(e) => onInputChange(e)}
            /><br />
            <input
              className=" btn btn-primary btn-sm mx-2 "
              type="submit"
              disabled={isCreatingQuizz}
            />
            {isCreatingQuizz && (
              <div className="text-center">Creating Quizz...</div>
            )}
            <button onClick={handleGoBack} className="btn btn-danger btn-sm ">
              Close
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}
export default AddQuizz;
