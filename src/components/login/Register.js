import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required("Username is required")
      .min(1, "Username must be at least 1 characters")
      .max(20, "Username must not exceed 20 characters"),
    email: Yup.string()
      .required("email is required")
      .min(1, "email must be at least 1 characters")
      .max(20, "email must not exceed 20 characters"),
    password: Yup.string()
      .required("Password is required")
      .min(1, "Password must be at least 1 characters")
      .max(40, "Password must not exceed 40 characters"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const onSubmit = async (data) => {
    const payload = {
      userName: data.username,
      email: data.email,
      userPassword: data.password,
    };
    const result = await axios.post(
      "http://localhost:8082/registerNewUser",
      payload
    );
    console.log(result);
    navigate("/");
  };

  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img
            src="https://as1.ftcdn.net/v2/jpg/02/09/95/42/500_F_209954204_mHCvAQBIXP7C2zRl5Fbs6MEWOEkaX3cA.jpg"
            alt="Logo"
            height="50"
            width="50"
            className="me-2"
          />
          <h3 className="text-light mb-0">Online Assessment Portal</h3>
        </a>
      </nav>
      <div className="container my-4">
        <div className="card">
          <div className="card-header">
            <h3 className="text-center">User Registration form for new student</h3>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label>Username:</label>
                <input
                  name="username"
                  type="text"
                  {...register("username")}
                  className={`form-control ${errors.username ? "is-invalid" : ""}`}
                />
                <div className="invalid-feedback">{errors.username?.message}</div>
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input
                  name="email"
                  type="text"
                  {...register("email")}
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                />
                <div className="invalid-feedback">{errors.email?.message}</div>
              </div>
              <div className="form-group">
                <label>Password:</label>
                <input
                  name="password"
                  type="password"
                  {...register("password")}
                  className={`form-control ${errors.password ? "is-invalid" : ""}`}
                />
                <div className="invalid-feedback">{errors.password?.message}</div>
              </div>
              <div className="form-group d-flex justify-content-center align-items-center">
                <button type="submit" className="btn btn-dark ">
                  Register
                </button>&nbsp;
                <Link className="btn btn-danger my-2" to={"/"}>
                  Back to Home
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
