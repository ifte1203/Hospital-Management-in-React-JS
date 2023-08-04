import Login from "../pages/Login";
import Signup from "../pages/Signup";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    BrowserRouter,
  } from "react-router-dom";

const Front = () => {
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Login />} />
                <Route exact path="/signup" element={<Signup />} />
            </Routes>
        </BrowserRouter>
        </>
    );
}

export default Front;