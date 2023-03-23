import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { quizzDetail } from '../../../store';
import useThunk from '../../../hooks/use-thunk';
import { useParams, useNavigate } from 'react-router-dom';

function QuizzDetails(props) {
   const navigate = useNavigate();
   const [dofetchQuizzById, isLoadingQuizzById, loadingQuizzByIdError] = useThunk(quizzDetail);
   const { data } = useSelector((state) => state.quizz);
   const { id } = useParams();
   useEffect(() => {
      dofetchQuizzById(id);
      console.log(data);
   }, [dofetchQuizzById, id]);// eslint-disable-line react-hooks/exhaustive-deps
   if (isLoadingQuizzById) {
      return <div>Loading...</div>;
   }
   if (loadingQuizzByIdError) {
      return <div>Error fetching data...</div>;
   }
   // -------------------------Go back function---------------------------------------
   function handleGoBack() {
      navigate("/Quizz");
   }
   return (
      <div>
         <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
               <a className="navbar-brand d-flex align-items-center" href="/Quizz">
                  <img src="https://as1.ftcdn.net/v2/jpg/02/09/95/42/500_F_209954204_mHCvAQBIXP7C2zRl5Fbs6MEWOEkaX3cA.jpg" alt="Logo" height="50" width="50" className="me-2" />
                  <h3 className="text-light mb-0">Online Assessment Portal</h3>
               </a></div></nav>
         <br></br>
         <br></br>
         <div className="container">
            <div class="card">
               <div class="card-body">
                  <h2>Quizz Details</h2>
                  <hr />
                  <table >
                     <thead className="thead-dark">
                        <tr>
                           <th>QuizzName</th>
                           {data.subject && <td>{data.subject.subjectId}</td>}
                        </tr>
                        <tr>
                           <th >Quizz Description</th>
                           <td > {data.description} </td>
                        </tr>
                        <tr>
                           <th >Quizz TotalMarks</th>
                           <td > {data.marks} </td>
                        </tr>
                        <tr>
                           <th >Quizz TotalQuestion</th>
                           <td > {data.totalQuestion} </td>
                        </tr>
                        <tr>
                           <th >Quizz PassMarks</th>
                           <td > {data.passMarks} </td>
                        </tr>
                     </thead>
                  </table>
               </div>
               <button onClick={handleGoBack}
                  className="btn btn-outline-dark">Go Back</button>
            </div>
         </div>
      </div>
   );
}

export default QuizzDetails;
