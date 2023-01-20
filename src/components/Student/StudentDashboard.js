import React from 'react';
import { NavLink ,useNavigate} from 'react-router-dom';
import StudentQuizz from './QuizzComponent/StudentQuizz';
function StudentDashboard(props) {

    let navigate = useNavigate();
    
      function handleGoBack(){
          navigate("/");
      }
    return (
    <div>
           
           <nav className="navbar navbar-dark bg-info">
            <div>
                         <div className='container'>
                         <h3 className="title">Online Assesment Portal</h3>&nbsp;&nbsp;&nbsp;
                            <NavLink  to="/StudentQuizz"> <button className='btn btn-danger' > Quizzes</button></NavLink>&nbsp;&nbsp;&nbsp;
                            <NavLink to="/StudentResult"> <button className='btn btn-dark'> <span>My Result </span></button></NavLink>&nbsp;&nbsp;&nbsp;

                            <a className="float-right"> <span onClick={handleGoBack}> Logout</span></a>
                            </div>
                    </div>
                    </nav>
 </div>
          
    );
    
}
export default StudentDashboard;