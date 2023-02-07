import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams,NavLink,useNavigate} from "react-router-dom";
import baseUrl from "../../baseUrl";
///////////////////////Fetching datas
export default function Subject() {
  const [subjects, setSubjects] = useState([]);

  const { subjectId } = useParams();

  useEffect(() => {
    loadSubjects();
  }, []);

  const loadSubjects = async () => {
    const result = await axios.get(`${baseUrl}/api/subjects`);
    setSubjects(result.data);
  };

  ////////////////handle goback
  let navigate = useNavigate();
    
      function handleGoBack(){
          navigate("/instructor");
      }
/////////////////////Deleting subject
  const deleteSubject = async (subjectId) => {
    await axios.delete(`${baseUrl}/api/subject/${subjectId}`);
    loadSubjects();
  };
///////////////////////Adding subject

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
      <h2 align="center">Subject</h2>
      <hr></hr>
        <NavLink exact to="/AddSubject"> <button className="btn btn-primary"> <span>  AddSubject</span></button></NavLink>
                          
      <div className="py-4">
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
            <th>S.NO</th>
            <th scope='col'>SubjectId</th>
            <th scope='col'>SubjectName</th>
            <th scope='col'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {subjects.map((subject, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
               <td>{subject.subjectId}</td>
                <td>{subject.subjectName}</td>
                
                <td>
                  
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteSubject(subject.subjectId)}
                  >
                    Delete
                  </button>
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