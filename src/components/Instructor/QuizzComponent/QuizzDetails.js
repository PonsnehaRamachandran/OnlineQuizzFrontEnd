   import axios from "axios";
   import {useEffect , useState} from "react";
   import {useNavigate , useParams} from "react-router-dom";


    
    function QuizzDetails(){
        
        const {id} = useParams();

        const [quizz , setQuizz] = useState({
          subject:0,
            description:"",
            marks:"",
            passMarks:"",
            totalQuestion:"",
        });

        useEffect(() => {
          
             async function getDetails(){
                const value = await axios.get(`http://localhost:8080/api/quizz/${id}`);
                setQuizz(value.data);
             }
             getDetails();
        },[id])

   // -------------------------Go back function---------------------------------------
     
      let navigate = useNavigate();
    
      function handleGoBack(){
          navigate("/Quizz");
      }


        return (
            <>
            <br></br>
            <br></br>
                <div className="container">
                 <div class="card">
  <div class="card-body">
                     <h2>Quizz Details</h2>     
<hr/>
                     <table >
                         <thead className="thead-dark">
                              <tr>
                                <th>QuizzName</th>
                                <td > {quizz.subject.subjectId} </td>
                             </tr>

                              <tr>
                                <th >Quizz Description</th>
                                <td > {quizz.description} </td>
                              </tr>


                               <tr>
                                  <th >Quizz TotalMarks</th>
                                  <td > {quizz.marks} </td>
                               </tr>

                               <tr>
                                  <th >Quizz TotalQuestion</th>
                                  <td > {quizz.totalQuestion} </td>
                               </tr>

                               <tr>
                                  <th >Quizz PassMarks</th>
                                  <td > {quizz.passMarks} </td>
                               </tr>

                               
                            </thead>
                         </table>
                     </div>
                     <button onClick={handleGoBack} className="btn btn-outline-dark">Go Back</button>
</div>
</div>        
                     
                   
            </>
        );
    }

    export default QuizzDetails;