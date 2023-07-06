import React from "react";
import "./Navbar.css";

export default function Navbar({ numberFilter, setNumberFilter }) {
  function handleFilterToggle(event) {
    setNumberFilter(event.target.value);
  }

  return (
    <div className="navbar">
      <img src="images/hackillinois2023logo.jpeg" alt="HackIllinois Logo" />
      <h1>HackIllinois 2023 Leaderboard</h1>
      <div className="dropdown">
        <select onChange={handleFilterToggle}>
          <option value="">All</option>
          <option value="25">Top 25</option>
          <option value="10">Top 10</option>
          <option value="5">Top 5</option>
        </select>
      </div>
    </div>
  );
}
