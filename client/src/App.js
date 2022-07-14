import "./App.css";
import Login from "./Login/Login";
import Register from "./Register/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import TravelItems from "./components/travelItems";
import TravelItemDescription from "./components/travelItemDescription";

import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const App = () => {
  const [user, setLoginUser] = useState({});
  const history = useNavigate();

  return (
    <div>
      <div>
        <Routes>
          <Route exact path="/" element={<TravelItems />} />
          <Route path="/item/:id" element={<TravelItemDescription />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login h={history} />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
