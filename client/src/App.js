import "./App.css";
import Homepage from "./Homepage/Homepage";
import Login from "./Login/Login";
import Register from "./Register/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
function App() {
  const [user, setLoginUser] = useState({});
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/">
            {user && user._id ? <Homepage /> : <Login />}
            <Homepage />
          </Route>
          <Route path="/Login">
            <Login setLoginUser={setLoginUser} />
          </Route>
          <Route path="/Register">
            <Register />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
