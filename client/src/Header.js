import React from "react";
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";
import "./index.css";
export default class TAHeader extends React.Component {
  render() {
    return (
      <div className="ta-header">
        <div ta-header-child>
          <Link className="btn btn-link" to={`/register`}>
            Register
          </Link>
          |
          <Link className="btn btn-link" to={`/login`}>
            Login
          </Link>
        </div>
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
