//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Header from './Header';
// import Search from './Search';
import Router from "./Router";
import { Usercontext } from './Usercontext';
// import { useLocation } from "react-router-dom";

function App() {
  // const  location  = useLocation().pathname;
  const [user, setUser] = useState();

  return (
    <Usercontext.Provider value={[user,setUser]}>
    <div className="container-fluid">
    <Header/>
    {/* {location != '/login' && location != '/signup' ? <Search/> : null } */}
    <Router/>
    </div>
    </Usercontext.Provider>
  );
}

export default App;
