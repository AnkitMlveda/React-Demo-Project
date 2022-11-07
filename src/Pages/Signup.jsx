import { useState } from "react";
import { newUser } from "../Apicall";
import { NavLink,useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

export default function Signup() {
  let [username, setUserName] = useState("");
  let [age, setUserAge] = useState("");
  let [email, setUserEmail] = useState("");
  let [pass, setUserPass] = useState("");

  let [usernameError, setUserNameError] = useState("");
  let [useremailError, setUserEmailError] = useState("");
  let [userpassError, setUserPassError] = useState("");
  let [userageError, setUserAgeError] = useState("");

  const navigate = useNavigate();

  function getname(e) {
    setUserName(e.target.value);
  }
  function getemail(e) {
    setUserEmail(e.target.value);
  }
  function getpassword(e) {
    setUserPass(e.target.value);
  }
  function getage(e) {
    setUserAge(Number(e.target.value));
  }

  const { mutate } = useMutation(newUser, {
    onSuccess: () => {
      alert("Sigup Sucessfully!");
      navigate("/login");
    },
  });

  async function validateform(e) {
    e.preventDefault();
    if (username == "") {
      setUserNameError("Please Enter The First Name");
      return;
    }
    setUserNameError("");

    if (email == "") {
      setUserEmailError("Please Enter The Email");
      return;
    }
    setUserEmailError("");

    if (pass == "") {
      setUserPassError("Please Enter The Password");
      return;
    }
    setUserPassError("");

    if (age == "") {
      setUserAgeError("Please Enter The Age");
      return;
    }
    setUserAgeError("");

    // alert('Sigup Sucessfully!');

    // let Name = document.getElementById("name").value;
    // let Email = document.getElementById("email").value;
    // let Password = document.getElementById("pwd").value;
    // let Age = Number(document.getElementById("age").value);
    // if (username && email && pass && age) {
    // await  newUser({
    //     name: username,
    //     email: email,
    //     password: pass,
    //     age: age,
    //   });
    // }

    mutate({
      name: username,
      email: email,
      password: pass,
      age: age,
    });
  }
  function clearform(e) {
    e.preventDefault();
    setUserName("");
    setUserEmail("");
    setUserPass("");
    getage(setUserAge((document.getElementById("age").value = "")));
  }
  return (
    <form id="signup" onSubmit={validateform}>
      <div className="mb-3 mt-3">
        <label className="form-label">Enter Your Name:</label>
        <input
          type="text"
          className="form-control col-md-3"
          id="name"
          placeholder="Enter Your Name"
          value={username}
          onChange={getname}
        />
        <p className="errormsg">{usernameError}</p>
      </div>
      <div className="mb-3 mt-3">
        <label className="form-label">Email:</label>
        <input
          type="email"
          className="form-control col-md-3"
          id="email"
          placeholder="Enter Email"
          value={email}
          onChange={getemail}
        />
        <p className="errormsg">{useremailError}</p>
      </div>
      <div className="mb-3">
        <label className="form-label">Password:</label>
        <input
          type="password"
          className="form-control"
          id="pwd"
          placeholder="Enter Password"
          value={pass}
          onChange={getpassword}
        />
        <p className="errormsg">{userpassError}</p>
      </div>
      <div className="mb-3 mt-3">
        <label className="form-label">Enter Your Age:</label>
        <input
          type="number"
          className="form-control col-md-3"
          id="age"
          placeholder="Enter Your Age"
          value={age}
          onChange={getage}
        />
        <p className="errormsg">{userageError}</p>
      </div>
      <button type="submit" className="btn btn-primary searchmargin">
        Signup
      </button>
      <button type="button" className="btn btn-primary" onClick={clearform}>
        Clear
      </button>
      <p className="text-muted">
        Already Register
        <NavLink className="nav-link custom" to="/login" end>
          Login
        </NavLink>
      </p>
    </form>
  );
}
