import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams ,NavLink ,useNavigate} from "react-router-dom";

export default function Quizz() {
  const [quizzes, setQuizzes] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadQuizzes();
  }, []);

  const loadQuizzes = async () => {
    const result = await axios.get("http://localhost:8080/api/quizz");
    setQuizzes(result.data);
  };
//////////////////////////////handle goback
let navigate = useNavigate();
    
function handleGoBack(){
    navigate("/instructor");
}

  ////////////////////////////Delete///////////////////////
  const deleteQuizz = async (id) => {
    await axios.delete(`http://localhost:8080/api/quizz/${id}`);
    loadQuizzes();
  };
///////////////////Viewing quizz///////////
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
    
    <div className="container">
      <br></br>
      <h2 align="center">QuizzList</h2>
      <hr></hr>
      <div className="py-4">
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
                <th>S.No</th>
            <th>QuizzId</th>
            <th>SubjectId</th> 
            <th>Quizz Description</th>
            <th>Option</th>
            </tr>
          </thead>
          <tbody>
            {quizzes.map((quizz, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>
                 {quizz.id}
              </td>
                <td>
                {quizz.subject && quizz.subject.subjectId ? quizz.subject.subjectId : 'N/A'}
               </td> 
                 <td>
                {quizz.description}
             </td>
             <td>
             <NavLink exact to={`/Quizz/QuizzDetails/${quizz.id}`}>
                                                 <button className="btn btn-secondary">Details</button>  
                                               </NavLink> &nbsp;&nbsp;&nbsp; 
             <NavLink exact to={`/Quizz/AddQuestion/${quizz.id}`}>
                       <button className="btn btn-primary">Add Question</button>  
                                </NavLink> &nbsp;&nbsp;&nbsp; 
            
            <NavLink exact to={`/Quizz/ViewQuestion/${quizz.id}`}>
                       <button className="btn btn-info">View Question</button>  
                                               </NavLink> &nbsp;&nbsp;&nbsp;
                                               <button
                    className="btn btn-danger "
                    onClick={() => deleteQuizz(quizz.id)}>Delete Quizz</button>
                    
             </td>
    
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <NavLink exact to="/AddQuizz"> <button className="btn btn-primary" > <span>  Add Quizz </span></button></NavLink>
  
    </div>
    </div>
  );
}