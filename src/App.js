//import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Search from './Search';
import Router from "./Router";
import { useLocation } from "react-router-dom";

function App() {
  const  location  = useLocation().pathname;

  return (
    <div className="container-fluid">
    <Header/>
    {location != '/login' && location != '/signup' ? <Search/> : null }
    <Router/>
    </div>
  );
}

export default App;
