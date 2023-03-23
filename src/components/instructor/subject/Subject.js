import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchSubject, deleteSubject } from "../../../store";
import { NavLink } from "react-router-dom";
import useThunk from "../../../hooks/use-thunk";

function Subject() {
  const [dofetchSuject, isLoadingSubject, loadingSubjectError] = useThunk(fetchSubject);
  const [dodeleteSubject, isDeletingSubject] = useThunk(deleteSubject);
  const { data } = useSelector((state) => {
    return state.subject;
  });
  useEffect(() => {
    dofetchSuject()
  }, [dofetchSuject]);
  if (isLoadingSubject) {
    return <div> Loading...</div>;
  }
  if (loadingSubjectError) {
    return <div>Error fetching data...</div>;
  }
  /////////////////////Deleting subject/////////
  const handleDeleteSubject = (subject) => {
    dodeleteSubject(subject);
  };

  ///////////////Adding subject//////////
  return (
    <div>
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand d-flex align-items-center" href="/instructor">
              <img src="https://as1.ftcdn.net/v2/jpg/02/09/95/42/500_F_209954204_mHCvAQBIXP7C2zRl5Fbs6MEWOEkaX3cA.jpg" alt="Logo" height="50" width="50" className="me-2" />
              <h3 className="text-light mb-0">Online Assessment Portal</h3>
            </a>
            <div className="d-flex justify-content-end">
              <NavLink to="/Subject">
                <button className="btn btn-dark">
                  <span>Subject</span>
                </button>
              </NavLink>
              <NavLink to="/Question">
                <button className="btn btn-dark">
                  <span>Question</span>
                </button>
              </NavLink>
              <NavLink to="/Quizz">
                <button className="btn btn-dark">
                  <span>Quizz</span>
                </button>
              </NavLink>
              <NavLink to="/Result">
                <button className="btn btn-dark">
                  <span>Result</span>
                </button>
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
      <br />
      <div className="container">
        <h2 align="center">Subject</h2>
        <hr></hr>
        <NavLink exact to="/AddSubject">
          <button className="btn btn-primary"> <span> AddSubject</span></button></NavLink>
        <div className="py-4">
          <table className="table table-striped">
            <thead >
              <tr>
                <th scope="col">SubjectId</th>
                <th scope="col">SubjectName</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((subject, index) => (
                <tr key={index}>
                  <td>{subject.subjectId}</td>
                  <td>{subject.subjectName}</td>
                  <td>
                    <button
                      className="btn btn-danger mx-2"
                      loading={isDeletingSubject}
                      onClick={() => handleDeleteSubject(subject)}
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
export default Subject;