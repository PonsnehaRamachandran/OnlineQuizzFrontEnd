import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addSubject } from '../../../store';
import useThunk from '../../../hooks/use-thunk';

function AddSubject(props) {
    const navigate = useNavigate();
    const [doaddSubject, isCreatingSubject, creatingSubjectError] = useThunk(addSubject);
    const [subject, setSubject] = useState({ subjectName: '' });
    const [error, setError] = useState("");
    const onInputChange = (event) => {
        setSubject({ ...subject, [event.target.name]: event.target.value });
    };
    const onSubmit = (event) => {
        event.preventDefault();
        if (Object.values(subject).some(val => val === "")) {
            setError("Please enter subject Name");
        } else {
            doaddSubject(subject);
            navigate('/Subject');
        }
    };
    /////////////handleclose/////////
    function handleGoBack() {
        navigate("/Subject");
    }
    return (
        <div className='container'>
            <br /><br />
            <div className='card'>
                <div className='card-header'>
                    <h1 className='text-center text-danger'>Add New Subject</h1>
                </div>
                <div className='card-body'>
                    {error && <div className="alert alert-danger">{error}</div>}
                    <form onSubmit={onSubmit}>
                        <div className="form-group d-flex justify-content-between">
                            <label ><strong>Subject:</strong></label>
                            <input
                                className='form-control col -sm-1'
                                type='text'
                                name='subjectName'
                                placeholder='Enter Subject Name'
                                value={subject.subjectName}
                                onChange={onInputChange}
                            />
                        </div>
                        {isCreatingSubject ? 'Creating Subject...' :
                            <button type='submit' className='btn btn-primary'>
                                Add
                            </button>}
                        {creatingSubjectError && 'Error creating subject'}
                        &nbsp;
                        <button type='button' className='btn btn-danger' onClick={handleGoBack}>
                            Close
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default AddSubject;