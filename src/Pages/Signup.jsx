import { useState } from 'react';
import { Newuser } from '../Apicall';
import { NavLink } from "react-router-dom";

export default function Signup(){
    let [getusername,setusername] = useState("");
    let [getuserage,setuserage] = useState("");
    let [getuseremail,setuseremail] = useState("");
    let [getuserpass,setuserpass] = useState("");

    let [getusernameerror,setusernameerror] = useState("");
    let [getuseremailerror,setuseremailerror] = useState("");
    let [getuserpasserror,setuserpasserror] = useState("");
    let [getuserageerror,setuserageerror] = useState("");

     function getname(){
        setusername(document.getElementById("name").value);
     }
     function getemail(){
       setuseremail(document.getElementById("email").value);
     }
     function getpassword(){
       setuserpass(document.getElementById("pwd").value);
     }
     function getage(){
        setuserage(document.getElementById("age").value);
     }

    function validateform(e){
        e.preventDefault();
        if(getusername == ""){
            setusernameerror("Please Enter The First Name");
        }
        else{
            setusernameerror("");
        }
                        
        if(getuseremail == ""){
            setuseremailerror("Please Enter The Email");
        }
        else{
            setuseremailerror("");
        }
        
        if(getuserpass == ""){
            setuserpasserror("Please Enter The Password");
        }
        else{
            setuserpasserror("");
        }

        if(getuserage == ""){
            setuserageerror("Please Enter The Age");
        }
        else{
            setuserageerror("");
        }

        if(getusernameerror == "" && getuserageerror == "" && getuseremailerror == "" && getuserpasserror == "" && getusername != "" && getuserage != "" && getuseremail != "" && getuserpass != ""){
            alert('Sigup Sucessfully!');
            setusername("");
            setuseremail("");
            setuserpass("");
            getage(setuserage(document.getElementById("age").value = ""));
        }

        let Name = document.getElementById("name").value;
        let Email = document.getElementById("email").value;
        let Password = document.getElementById("pwd").value;
        let Age = Number(document.getElementById("age").value);
        console.log( {age: Age,
          name: Name,
          email: Email,
          password: Password});
        if (Name && Email && Password && Age) {
          Newuser({
            age: Age,
            name: Name,
            email: Email,
            password: Password,
          });
          console.log(Newuser);
        }

    }
    function clearform(e){
        e.preventDefault();
        setusername("");
        setuseremail("");
        setuserpass("");
        getage(setuserage(document.getElementById("age").value = ""));
    }
    return(
        <form id="signup">
          <div className="mb-3 mt-3">
            <label className="form-label">Enter Your Name:</label>
            <input type="text" className="form-control col-md-3" id="name" placeholder="Enter Your Name" value={getusername} onChange={getname}/>
            <p className="errormsg">{getusernameerror}</p>
          </div>
          <div className="mb-3 mt-3">
            <label className="form-label">Email:</label>
            <input type="email" className="form-control col-md-3" id="email" placeholder="Enter Email" value={getuseremail} onChange={getemail}/>
            <p className="errormsg">{getuseremailerror}</p>
          </div>
          <div className="mb-3">
            <label className="form-label">Password:</label>
            <input type="password" className="form-control" id="pwd" placeholder="Enter Password" value={getuserpass} onChange={getpassword}/>
            <p className="errormsg">{getuserpasserror}</p>
          </div>
          <div className="mb-3 mt-3">
          <label className="form-label">Enter Your Age:</label>
          <input type="number" className="form-control col-md-3" id="age" placeholder="Enter Your Age" value={getuserage} onChange={getage}/>
          <p className="errormsg">{getuserageerror}</p>
          </div>
          <button type="submit" className="btn btn-primary searchmargin" onClick={validateform}>Signup</button>
          <button type="button" className="btn btn-primary" onClick={clearform}>Clear</button>
          <p className="text-muted">Already Register 
            <NavLink className="nav-link custom" to="/login" end>
                  Login
            </NavLink>
          </p>
        </form>
    );
}