import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchSubject } from "../../../store";
import useThunk from "../../../hooks/use-thunk";
import './ViewSubject.css';

export default function Subject() {
  const [dofetchSuject, isLoadingSubject, loadingSubjectError] = useThunk(fetchSubject);
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
  return (
    <div>
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand d-flex align-items-center" href="/StudentQuizz">
            <img src="https://as1.ftcdn.net/v2/jpg/02/09/95/42/500_F_209954204_mHCvAQBIXP7C2zRl5Fbs6MEWOEkaX3cA.jpg" alt="Logo" height="50" width="50" className="me-2" />
            <h3 className="text-light mb-0">Online Assessment Portal</h3>
          </a>
        </nav>
      </div>
      <hr></hr>
      <div className="container">
        <h2 align="center">Available Subjects</h2>
        <hr></hr>
        <div className="py-4">
          <div className="row">
            {data.map((subject, index) => (
              <div key={index} className="col-sm-6 col-md-4 mb-3">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{subject.subjectName}</h5>
                    <p className="card-text">Subject Id: {subject.subjectId}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
