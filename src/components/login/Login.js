import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required("Username is required")
      .min(1, "Username must be at least 1 characters")
      .max(20, "Username must not exceed 20 characters"),
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
    const payload = { userName: data.username, userPassword: data.password };
    const result = await axios.post("http://localhost:8082/authenticate", payload);

    if (result?.data?.user?.role[0]?.roleName === "User") {
      localStorage.setItem("user", JSON.stringify(result.data.user));
      navigate("/student");
    } else {
      navigate("/instructor");
    }
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
      <br />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-8 col-md-6">
            <div className="card">
              <div className="card-header text-center">
                <h3>Portal Login</h3>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-group">
                    <input
                      name="username"
                      type="text"
                      placeholder="Enter Username"
                      {...register("username")}
                      className={`form-control ${errors.username ? "is-invalid" : ""
                        }`}
                    />
                    <div className="invalid-feedback">
                      {errors.username?.message}
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      name="password"
                      type="password"
                      placeholder="Enter password"
                      {...register("password")}
                      className={`form-control ${errors.password ? "is-invalid" : ""
                        }`}
                    />
                    <div className="invalid-feedback">
                      {errors.password?.message}
                    </div>
                  </div>
                  <div className="form-group d-flex justify-content-center align-items-center">
                    <button type="submit" className="btn btn-dark mt-2">
                      Login
                    </button>
                    <Link
                      className="btn btn-danger mx-2 mt-2" to={"/"}>Back to Home</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div></div>
  );
}
