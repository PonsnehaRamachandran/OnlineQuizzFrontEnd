

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddSubject(props) {
const navigate = useNavigate();
    const [subject, setSubject] = useState({
        subjectId:0,
        subjectName:""
    });
    const onInputChange = (e) => {
        setSubject({ ...subject, [e.target.name]: e.target.value });
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        
        await axios.post("http://localhost:8080/api/subject", subject);
        navigate("/Subject");
    }


    /////////////////////hanleclose
    
      function handleGoBack(){
          navigate("/Subject");
      }

    return (
        <div className='container'>
            <br></br>
            <br></br>
            <div className='card'>
                <div className='card-header'>
                    <h1 className='text-center text-danger'>
                        Add New Subject
                    </h1>
                </div>
                <div className='card-body '>
                    <form onSubmit={onSubmit}>
                      
                        <label className='d-flex justify-content-around'>Subject Name:</label><br />
                        <input
                            className='form-control'
                            type='text'
                            name='subjectName'
                            placeholder='Enter Subject Name'
                            value={subject.subjectName}
                            onChange={(e) => onInputChange(e)}
                        /><br />
                        <button type='submit' className='btn btn-primary'>Submit</button>

                        <button className='btn btn-danger mx-2' onClick={handleGoBack} >Close</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddSubject;