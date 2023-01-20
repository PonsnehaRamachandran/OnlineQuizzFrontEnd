import React from 'react';
import { BrowserRouter as Router,Outlet,Route,Routes } from 'react-router-dom';
import { NavLink ,useNavigate} from 'react-router-dom';
 

import {useState  , useEffect} from "react";
import axios from "axios";

function  InstructorDashboard(props) {

    const navigate = useNavigate();
    
      function handleGoBack(){
          navigate("/");
      }

/////////////////////////
const [quizz , setQuizz] = useState("Updating...");
const [question , setQuestion] = useState("Updating...");

  useEffect(() => {
      async function getAllQuizz(){
          let value  = await axios.get(`http://localhost:8080/api/quizz`);
          setQuizz("We have total " +value.data.length + " quizz");
      }
      getAllQuizz();


      async function getAllQuestions(){
          let value  = await axios.get(`http://localhost:8080/api/questions`);
          setQuestion("We have total " +value.data.length + "question");
      }
      getAllQuestions();

    })
    function showQuizz(){
     navigate("/Quizz");
 }

 function showQuestions(){
     navigate("/Question");
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
                           
                            <a> <button  className='btn btn-dark'><span onClick={handleGoBack}> Logout</span></button></a>
        
                            </div>
                      
                            </div>
                    </nav>


                          
                   
 </div>
 <br></br>
 <div className='container'> 
                               <h1>Dashboard</h1>     
                          
<br></br>
                            <div className='row'>
                              <div className='col-5 table-bordered mx-4 ' >
                               <h3 className='text-center'>{quizz}</h3><br></br>
                               <div className="text-center">
                                   <button className="btn btn-danger" onClick={showQuizz}>View Details</button> </div>
                            <br></br></div>

                              <div className='col-5 table-bordered ' >
                                  <h3 className='text-center'>{question}</h3><br></br>
                                  <div className="text-center">
                                   <button className="btn btn-danger" onClick={showQuestions}>View Details</button> <br></br>
                              </div><br></br></div>
</div>
                              </div>    </div>                       
    );
    
}
export default InstructorDashboard;