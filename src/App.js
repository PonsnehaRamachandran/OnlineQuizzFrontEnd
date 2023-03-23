import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InstructorDashboard from './components/instructor/InstructorDashboard';
import Subject from './components/instructor/subject/Subject';
import AddSubject from './components/instructor/subject/AddSubject';
import Question from './components/instructor/question/Question';
import Quizz from './components/instructor/quizz/Quizz';
import Result from './components/instructor/result/Result';
import QuizzDetails from './components/instructor/quizz/QuizzDetails';
import AddQuestion from './components/instructor/quizz/AddQuestion'
import ViewQuestion from './components/instructor/quizz/ViewQuestion'
import AddQuizz from './components/instructor/quizz/AddQuizz';

import Home from './components/Home';
import Login from './components/login/Login';
import Register from './components/login/Register';

import StudentDashboard from './components/student/StudentDashboard';
import ViewSubject from './components/student/subject/ViewSubjects';
import StudentQuizz from './components/student/quizz/StudentQuizz';
import StudentTest from './components/student/test/StudentTest';
import StudentResult from './components/student/result/StudentResult';
import Solution from './components/student/result/Solution';

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />

        <Route exact path="/instructor" element={<InstructorDashboard />} />
        <Route exact path="/student" element={<StudentDashboard />} />
        <Route path="/Subject" element={<Subject />}></Route>
        <Route exact path="/Question" element={<Question />}></Route>
        <Route exact path="/Quizz" element={<Quizz />}></Route>
        <Route exact path="/Result" element={<Result />}></Route>

        <Route path="/AddSubject" element={<AddSubject />}></Route>
        <Route exact path="/Quizz/QuizzDetails/:id" element={<QuizzDetails />}></Route>
        <Route exact path="/Quizz/AddQuestion/:id" element={<AddQuestion />}></Route>
        <Route exact path="/Quizz/ViewQuestion/:id" element={<ViewQuestion />}></Route>
        <Route exact path="/AddQuizz" element={<AddQuizz />}></Route>

        <Route exact path="/student" element={<StudentDashboard />}></Route>
        <Route exact path="ViewSubject" element={<ViewSubject />}></Route>
        <Route exact path='/StudentQuizz' element={<StudentQuizz />} />
        <Route exact path='/StudentQuizz/:id/questions' element={<StudentTest />}></Route>
        <Route exact path='/StudentResult' element={<StudentResult />}></Route>
        <Route exact path='/StudentQuizz/:id/questions/solution' element={<Solution/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
