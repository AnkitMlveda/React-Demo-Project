import { useState } from "react";
import { userLogin } from "../Apicall";
import { NavLink, useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function Login() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let [emailError, setEmailError] = useState("");
  let [passError, setPassError] = useState("");

  const navigate = useNavigate();
  const queryclient = useQueryClient();

  function onEmailChange(e) {
    setEmail(e.target.value);
  }
  function onPasswordChange(e) {
    setPassword(e.target.value);
  }

  const { mutate } = useMutation(userLogin,{
    onSuccess:(data) =>{
      alert("Login Sucessfully!");
      setEmail("");
      setPassword("");
      navigate("/movie");
    }
    })

async function validateform(e) {
    e.preventDefault();
    if (email == "") {
      setEmailError("Please Enter The Email");
      return;
    }
    setEmailError("");
    if (password == "") {
      setPassError("Please Enter The Password");
    }
     setPassError("");
    // const loginuserData = await userLogin({ username:email,password });
    // console.log(loginuserData);
    //   alert("Login Sucessfully!");
    //   setEmail("");
    //   setPassword("");
    //   navigate("/movie");
    mutate({ username:email,password });
  }

  return (
    <form id="login" onSubmit={validateform}>
      <div className="mb-3 mt-3">
        <label className="form-label">Email:</label>
        <input
          type="email"
          className="form-control col-md-3"
          id="email"
          placeholder="Enter email"
          value={email}
          onChange={onEmailChange}
        />
        <p className="errormsg">{emailError}</p>
      </div>
      <div className="mb-3">
        <label className="form-label">Password:</label>
        <input
          type="password"
          className="form-control"
          id="pwd"
          placeholder="Enter password"
          value={password}
          onChange={onPasswordChange}
        />
        <p className="errormsg">{passError}</p>
      </div>
      <button type="submit" className="btn btn-primary">
        Login
      </button>
      <p className="text-muted">
        Not Register
        <NavLink className="nav-link custom" to="/signup">
          Signup
        </NavLink>
      </p>
    </form>
  );
}
