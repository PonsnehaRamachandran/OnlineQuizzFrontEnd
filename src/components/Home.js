import React from "react";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div className="container-fluid h-auto">
    <div className="bg-danger">
      <nav className="navbar navbar-inverse navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="navbar-header">
            <h3 className="text-light mb-0">Online Assessment Portal</h3>
          </div>
          <div className="float-right">
            <NavLink to="/register"><button className="btn btn-dark ml-auto"> Register</button></NavLink>&nbsp;
            <NavLink to="/login"><button className="btn btn-dark ml-auto">Login</button></NavLink>
          </div>
        </div>
      </nav>
    </div>
    <img src="https://blog.learnyst.com/wp-content/uploads/2020/11/image1-9.jpg" alt="Background" className="img-fluid" />
  </div> 
  );
}
