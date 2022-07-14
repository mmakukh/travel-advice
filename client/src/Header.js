import React from "react";
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";
import "./index.css";

export default class TAHeader extends React.Component {
  render() {
    function signup(name) {
      console.log({ name });
      if (name) {
        return (
          <div ta-header-child>
            {" "}
            {name} |{" "}
            <Link className="btn btn-link" to={`/`}>
              Logout
            </Link>{" "}
          </div>
        );
      }
      return (
        <div ta-header-child>
          <Link className="btn btn-link" to={`/register`}>
            Register
          </Link>
          |
          <Link className="btn btn-link" to={`/login`}>
            Login
          </Link>
        </div>
      );
    }

    return (
      <div className="ta-header">
        {signup(this.props.userName)}
        <div ta-header-child>
          <Link className="btn btn-link" to={`/`}>
            Travel Advice
          </Link>
        </div>
        <div ta-header-child>Current date</div>
      </div>
    );
  }
}
