import "./App.css";
import Homepage from "./Homepage/Homepage";
import Login from "./Login/Login";
import Register from "./Register/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import TravelItems from "./components/travelItems";
import TravelItemDescription from "./components/travelItemDescription";

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<TravelItems />} />
        <Route path="/item/:id" element={<TravelItemDescription />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
