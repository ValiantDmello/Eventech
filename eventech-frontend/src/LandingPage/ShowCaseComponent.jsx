import React from "react";
import { Link } from "react-router-dom";

export default function ShowCaseComponent() {
  // Check if the "token" exists in localStorage
  let isLoggedIn = localStorage.getItem("token");

  return (
    <section
      id="showcase"
      className="d-flex justify-content-center align-items-center"
    >
      <div id="overlay"></div>
      <div id="header" className="container text-white text-center">
        <h3 className="display-5 mb-0">EVENT MANAGEMENT</h3>
        <h1 className="display-1">EVENTECH</h1>
        <p className="lead d-none d-md-block">
          Streamline your events with ease using our powerful and user-friendly
          event management app.
        </p>
        {!isLoggedIn ? (
          <Link to="/join">
          <button id="book" className="btn btn-lg btn-primary px-5">
            JOIN NOW
          </button>
        </Link>
        ) : null}
      </div>
    </section>
  );
}
