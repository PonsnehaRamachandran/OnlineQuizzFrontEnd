import React from 'react';
import { useNavigate , useParams ,NavLink} from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import baseUrl from '../../baseUrl';
function ViewQuestion(props) {

  const { id } = useParams();

  //////////////handle goback
const navigate = useNavigate();
    
function handleGoBack(){
    navigate("/Quizz");
}
const [questions , setQuestions] = useState([]);

      useEffect(() => {
          async function getAllQuestions(){
            let value = await axios.get(`${baseUrl}/api/quizz/${id}/questions`);
            setQuestions(value.data);
            //console.log(value.data);
          } 
          getAllQuestions();
      },[id])

////////////////////////////Edit quesiion
const [display , setDisplay]  = useState({display:
  "none"}
);

function handleEditQuestion(questionId)
         {
            setDisplay({display:"block"});
             setDataInInputField(questionId);
         }

         function handleClose(){
             setDisplay({display:"none"});
         }

         const {questionId} = useParams();



//  ---------------------- handling text field -------------------------------------

const [updatedQ , setUpdatedQ] = useState({
question: "",
optionOne: "",
optionTwo: "",
optionThree: "",
optionFour: "",
answer: "",
quizz : id,
subject:0,
answer: "",
mark: "",
levelOfDifficulty: ""
});


function onTextFieldChange(e){
setUpdatedQ({
  ...updatedQ,
  [e.target.name] : e.target.value
})
// console.log(updatedQ);
}





//  ---------------------- Showing data in text field -------------------------------------

// Id of current question clicked
const [qId , setQId] = useState();


    function setDataInInputField(questionId){
        setQId(questionId);

       for(let i=0; i<questions.length ; i++)
       {
           if( parseInt( questions[i].questionId) === parseInt( questionId )) {
               setUpdatedQ(questions[i]);
           }
       }
   }
// -----------------------------------------------------------------------------------------

const [check , setCheck] = useState();


async function updateQuestion(){
await axios.put(`${baseUrl}/api/questions/${qId}` , updatedQ);
setCheck(true);
}
if(check) return <ViewQuestion />;
////////////////////////handle delete
const deleteQuestion = async (questionId) => {
  await axios.delete(`${baseUrl}/questions/${questionId}`);
 // getAllQuestions();
};




  return (
    
    <div >
      <br>
    </br>
    <h2 align="center">Questions</h2>
    <hr></hr>
    <div className="py-4">
      <table className="table table-striped align=left">
        <thead className='thead-dark'>
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
   <th>LevelOfDifficulty</th>
   <th scope='col'>Actions</th>
          </tr>
        </thead>
        
        <tbody>
        {questions.map((question, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
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
     <td>
     <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteQuestion(question.questionId)}
                  >
                    Delete
                  </button>  
                  </td>
                  <td>
                  <button onClick={()=>handleEditQuestion(question.questionId)} className="btn btn-primary">Edit</button>
                 </td> </tr>
                
            ))}
             
          </tbody>
        </table>
        <button onClick={handleGoBack} className="btn btn-dark">Go back</button>
      </div>
   <div style={display} className="container" >
 
<label className='d-flex justify-content-around'>Update Question:</label><br />
                                <input
                                    className='form-control'
                                    type='text'
                                    name='question'
                                    placeholder='Enter Question'
                                    value={updatedQ.question}
                                    onChange={(e) => onTextFieldChange(e)}
                                /><br />

<label className='d-flex justify-content-around'>Update Option One:</label><br />
                                <input
                                    className='form-control'
                                    type='text'
                                    name='optionOne'
                                    placeholder='Option One'
                                    value={updatedQ.optionOne}
                                    onChange={(e) => onTextFieldChange(e)}
                                /><br />
                                <label className='d-flex justify-content-around'>Enter  OptionTwo:</label><br />
                                <input
                                    className='form-control'
                                    type='text'
                                    name='optionTwo'
                                    placeholder='Enter Option Two'
                                    value={updatedQ.optionTwo}
                                    onChange={(e) => onTextFieldChange(e)}
                                /><br />
                                <label className='d-flex justify-content-around'>Update Option Three:</label><br />
                                <input
                                    className='form-control'
                                    type='text'
                                    name='optionThree'
                                    placeholder='Enter Option Three'
                                    value={updatedQ.optionThree}
                                    onChange={(e) => onTextFieldChange(e)}
                                /><br />
                                <label className='d-flex justify-content-around'>Update Option Four:</label><br />
                                <input
                                    className='form-control'
                                    type='text'
                                    name='optionFour'
                                    placeholder='Enter Option Four'
                                    value={updatedQ.optionFour}
                                    onChange={(e) => onTextFieldChange(e)}
                                /><br />
                                <label className='d-flex justify-content-around'>Update Answer:</label><br />
                                <input
                                    className='form-control'
                                    type='text'
                                    name='answer'
                                    placeholder='Enter Answer'
                                    value={updatedQ.answer}
                                    onChange={(e) => onTextFieldChange(e)}
                                /><br />
                                <label className='d-flex justify-content-around'>Update Mark:</label><br />
                                <input
                                    className='form-control'
                                    type='text'
                                    name='mark'
                                    placeholder='Enter the mark'
                                    value={updatedQ.mark}
                                    onChange={(e) => onTextFieldChange(e)}
                                /><br />
                                <label className='d-flex justify-content-around'>Update levelOfDifficulty:</label><br />
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