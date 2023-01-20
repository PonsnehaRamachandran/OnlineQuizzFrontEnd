import './App.css';
import InstructorDashboard from "./components/Instructor/InstructorDashboard"
import Subject from './components/Instructor/SubjectComponent/Subject';
import Question from './components/Instructor/QuestionComponent/Question';
import Quizz from './components/Instructor/QuizzComponent/Quizz';
import Result from './components/Instructor/ResultComponent/Result';
import AddSubject from './components/Instructor/SubjectComponent/AddSubject';
import QuizzDetails from './components/Instructor/QuizzComponent/QuizzDetails';
import AddQuestion from './components/Instructor/QuizzComponent/AddQuestion'
import ViewQuestion from './components/Instructor/QuizzComponent/ViewQuestion'
import AddQuizz from './components/Instructor/QuizzComponent/AddQuizz';
import Home from './components/Home';
import { BrowserRouter as Router, Route,  Routes} from 'react-router-dom';


import StudentDashboard from './components/Student/StudentDashboard'
import StudentQuizz from './components/Student/QuizzComponent/StudentQuizz';
import StudentTest from './components/Student/TestComponent/StudentTest';
import StudentResult from './components/Student/ResultComponent/StudentResult';


function App() {
 
  return (

   <Router>
          <Routes>
         
                       <Route exact path="/" element={<Home/>}/>
                       <Route exact path="/instructor" element={<InstructorDashboard/>}/>
                       <Route exact path="/student" element={<StudentDashboard/>}/>
                       <Route  path="/Subject" element={<Subject/>}></Route>
                        <Route  exact path="/Question" element={<Question/>}></Route>
                        <Route  exact path="/Quizz" element={<Quizz/>}></Route>
                        <Route  exact path="/Result" element={<Result/>}></Route>
                      
                        <Route  path="/AddSubject" element={<AddSubject/>}></Route>
                        <Route exact path="/Quizz/QuizzDetails/:id" element={<QuizzDetails/>}></Route>
                        <Route exact path="/Quizz/AddQuestion/:id" element={<AddQuestion/>}></Route>
                       <Route exact path="/Quizz/ViewQuestion/:id" element={<ViewQuestion/>}></Route>
                       <Route  exact path="/AddQuizz" element={<AddQuizz/>}></Route>
                      

                     
                      <Route exact path="/student" element={<StudentDashboard/>}></Route>
                       <Route exact path='/StudentQuizz' element={<StudentQuizz/>}></Route>
                       <Route exact path='/StudentQuizz/:id/questions' element={<StudentTest/>}></Route>
                        <Route exact path='/StudentResult' element={<StudentResult/>}></Route>
                      
          </Routes>
     </Router>  
        
    
  
  );
}

export default App;
