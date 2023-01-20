import axios from "axios";
import {useEffect , useState} from "react";
import {useNavigate ,NavLink } from "react-router-dom";

 function StudentQuizz(){
     
     const [quizz , setQuizz] = useState([]);

     const ViewQuizz = async () => {

      const result = await axios.get("http://localhost:8080/api/quizz");
      console.log(result);
      setQuizz(result.data);

  }
  useEffect(() => {

   ViewQuizz();

}, []);

// -------------------------Go back function---------------------------------------
  
   let navigate = useNavigate();
 
   function handleGoBack(){
       navigate("/student");
   }


   return (
      <>
        <div>
        <nav className="navbar navbar-dark bg-info">
        <h3 className="title">Online Assesment Portal</h3>
                        
        </nav></div>
        <br></br><div>
          <h2 align="center">Quizz Details</h2>
          </div>
        <br></br>
          <div className="container">
          <table className="table">
  <thead className="thead-dark">
    <tr>
      <th>Quizz Description</th>
      <th>Quizz TotalMarks</th>
      <th>Quizz TotalQuestion</th>
      <th>Quizz PassMarks</th>
      <th>Quizzes</th>
    </tr>
  </thead>
  <tbody>
    {quizz.map((q) => (
      <tr key={q.id}>
        <td>{q.description}</td>
        <td>{q.marks}</td>
        <td>{q.totalQuestion}</td>
        <td>{q.passMarks}</td><td>
        <NavLink exact to={`/StudentQuizz/${q.id}/questions`}> <button className="btn btn-primary"> <span> Go to Quizz </span></button></NavLink></td>
                             </tr>
    ))}
  </tbody>
</table>
<button onClick={handleGoBack} className="btn btn-outline-dark">Go Back</button>
          </div>
       
        
      </>
    );
 }

 export default StudentQuizz;

