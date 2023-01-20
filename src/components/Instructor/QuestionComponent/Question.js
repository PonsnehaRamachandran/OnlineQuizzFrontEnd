import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, useParams ,useNavigate} from "react-router-dom";

export default function Question() {
    const [questions,setQuestions]=useState([]);

  const { questionId } = useParams();

  useEffect(() => {
    loadQuestions();
  }, []);

  const loadQuestions = async () => {
    const result = await axios.get("http://localhost:8080/api/questions");
    setQuestions(result.data);
  };
////////////////handle goback
let navigate = useNavigate();
    
function handleGoBack(){
    navigate("/instructor");
}

  return (
    
    <div>
       <div>
           
           <nav className="navbar navbar-dark bg-info">
            <div>
       
                         <div >
                         <h3 className="title">Online Assesment Portal</h3>
                            <NavLink  to="/Subject"> <button className='btn btn-dark'> <span>  Subject </span></button></NavLink>
                            <NavLink  to="/Question"> <button  className='btn btn-dark' > <span>  Question </span></button></NavLink>
                            <NavLink  to="/Quizz"> <button  className='btn btn-dark' > <span>  Quizz </span></button></NavLink>
                            <NavLink to="/Result"> <button  className='btn btn-dark'> <span>  Result </span></button></NavLink>
       
                            <a> <button  className='btn btn-dark'><span onClick={handleGoBack}> Logout</span></button></a>
        
                            </div>
                    </div>
                    </nav>
       </div>
      <br></br>
      <h2 align="center">QuestionList</h2>
     
      <div className="container">
      <div className="py-4">
        <table className="table table-striped">
          <thead className="thead-dark">
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
            </tr>
          </thead>
          <tbody>
            {questions.map((question, i) => (
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