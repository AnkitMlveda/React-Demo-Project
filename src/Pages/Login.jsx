import { useState } from 'react';
import { Userlogin } from '../Apicall';
import { NavLink,useNavigate } from "react-router-dom";

export default function Login(){
    let [getuemail,setemail] = useState("");
    let [getpass,setpass] = useState("");

    let [getemailerror,setemailerror] = useState("");
    let [getpasserror,setpasserror] = useState("");
   
    const navigate = useNavigate();

     function getemail(){
       setemail(document.getElementById("email").value);
     }
     function getpassword(){
       setpass(document.getElementById("pwd").value);
     }

    function validateform(e){
        e.preventDefault();            
        if(getuemail == ""){
            setemailerror("Please Enter The Email");
        }
        else{
            setemailerror("");
        }
        
        if(getpass == ""){
            setpasserror("Please Enter The Password");
        }
        else{
            setpasserror("");
        }

        const username = document.getElementById("email").value;
        const password = document.getElementById("pwd").value;
        const loginuserData = Userlogin({ username, password });
        console.log(loginuserData)

        if(getemailerror == "" && getpasserror == "" && getuemail != "" && getpass != ""){
            alert('Login Sucessfully!');
            setemail(document.getElementById("email").value = "");
            setpass(document.getElementById("pwd").value = "");
        }

        navigate('/movie');
    }

    return(
        <form id="login">
          <div className="mb-3 mt-3">
            <label className="form-label">Email:</label>
            <input type="email" className="form-control col-md-3" id="email" placeholder="Enter email" value={getuemail} onChange={getemail}/>
            <p className="errormsg">{getemailerror}</p>
          </div>
          <div className="mb-3">
            <label className="form-label">Password:</label>
            <input type="password" className="form-control" id="pwd" placeholder="Enter password" value={getpass} onChange={getpassword}/>
            <p className="errormsg">{getpasserror}</p>
          </div>
          <button type="submit" className="btn btn-primary" onClick={validateform}>Login</button>
          <p className="text-muted">Not Register 
            <NavLink className="nav-link custom" to="/signup">
                    Signup
            </NavLink>
          </p>
        </form>
    );
}