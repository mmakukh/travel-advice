import "./App.css";
import Homepage from "./Homepage/Homepage";
import Login from "./Login/Login";
import Register from "./Register/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import TravelItems from "./components/travelItems";
import TravelItemDescription from "./components/travelItemDescription";
import Header from "./Header";
import Footer from "./Footer";

const App = () => {
  const [user, setLoginUser] = useState({});

  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Routes>
          <Route exact path="/" element={<TravelItems />} />
          <Route path="/item/:id" element={<TravelItemDescription />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/login"
            element={<Login setLoginUser={setLoginUser} />}
          />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
