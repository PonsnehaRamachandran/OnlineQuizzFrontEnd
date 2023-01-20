import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
function AddQuizz(props) {
    
    const navigate = useNavigate();
    const [quizz, setQuizz] = useState({
        //quizzId:0,
        subject:0,
        description:"",
        marks:"",
        totalQuestion:"",
        passMarks:""
    });
        const onInputChange = (e) => {
            setQuizz({ ...quizz, [e.target.name]: e.target.value });
        }
    
        const onSubmit = async (e) => {
            e.preventDefault();
            await axios.post("http://localhost:8080/api/quizz", quizz)
            navigate("/Quizz");
        }
    ////////////////////////////////////handlogoback
    function handleGoBack(){
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
                    <form onSubmit ={(e) => onSubmit(e)}>

<label className='d-flex justify-content-around'>Subject:</label><br />
<input
    className='form-control'
    type='number'
    name='subject'
    placeholder='Enter Subject'
    value={quizz.subject}
    onChange={(e) => onInputChange(e)}
/><br />

<label className='d-flex justify-content-around'>Description:</label><br />
<input
    className='form-control'
    type='text'
    name='description'
    placeholder='Enter Description'
    value={quizz.description}
    onChange={(e) => onInputChange(e)}
/><br />

<label className='d-flex justify-content-around'>Marks:</label><br />
<input
    className='form-control'
    type='text'
    name='marks'
    placeholder='Enter Total QuizzMark'
    value={quizz.marks}
    onChange={(e) => onInputChange(e)}
/><br />

<label className='d-flex justify-content-around'>Total Question:</label><br />
<input
    className='form-control'
    type='text'
    name='totalQuestion'
    placeholder='Enter Total QuizzMark'
    value={quizz.totalQuestion}
    onChange={(e) => onInputChange(e)}
/><br /><label className='d-flex justify-content-around'>Passmarks:</label><br />
<input
    className='form-control'
    type='text'
    name='passMarks'
    placeholder='Enter Passmarks'
    value={quizz.passMarks}
    onChange={(e) => onInputChange(e)}
/><br />

<button type='submit' className='btn btn-primary mx-2'>Submit</button>
<button onClick={handleGoBack} className="btn btn-danger">Close</button>
</form>
                </div>
            </div>
        </div>
    );
}
export default AddQuizz;
