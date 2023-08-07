import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Admin from "./modules/Admin";
import Login from "./pages/Login";
import UserList from "./pages/UserList";
import NewUser from "./pages/NewUser";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user" element={<UserList />} />
          <Route path="/user/create" element={<NewUser />} />
          {/* <Route path="/" element={<Admin />}>
            <Route path="dashboard" element={<UserList />} />
            <Route path="createuser" element={<NewUser />} />
          </Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
