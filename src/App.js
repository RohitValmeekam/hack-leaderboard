import React, {useState} from "react"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Leaderboard from './Components/Leaderboard';
import Navbar from "./Components/Navbar";

export default function App() {
  const [numberFilter, setNumberFilter] = useState("")
  return (
    <Router>
      <Routes>
          <Route
          path="/"
          element={
            <div className="home">
              <Navbar numberFilter={numberFilter} setNumberFilter={setNumberFilter}/>
              <Leaderboard numberFilter={numberFilter} setNumberFilter={setNumberFilter}/>
            </div>
          }
          />
      </Routes>
    </Router>
  )
}

