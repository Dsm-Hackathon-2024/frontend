import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import GlobalStyle from "./style/GlobalStyle";
import MainRouter from "./routes/MainRouter";

function App() {
  return <MainRouter />;
}

export default App;
