import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";
import Search from "../pages/Search";

function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MainRouter;
