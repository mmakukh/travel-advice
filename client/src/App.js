import "./App.css";
import Homepage from "./Homepage/Homepage";
import Login from "./Login/Login";
import Register from "./Register/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import TravelItems from "./components/travelItems";

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<TravelItems />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
