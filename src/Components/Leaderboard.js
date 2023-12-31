import React, { useEffect, useState } from "react";
import './Leaderboard.css';

export default function Leaderboard({numberFilter, setNumberFilter}) {
  const [profiles, setProfiles] = useState([]);
  useEffect(() => {
    let url = "https://adonix.hackillinois.org/profile/leaderboard/ "
    if (numberFilter !== '') {
      url = `https://adonix.hackillinois.org/profile/leaderboard/?limit=${numberFilter}`
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProfiles(data.profiles);
      })
      .catch((error) => {
        console.log("Error fetching leaderboard data:", error);
      });
  }, [numberFilter]);

  if (profiles.length===0) {
    return( 
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    )
  }
  return (
    <div>
      <table className="leaderboard">
        <thead>
          <tr>
            <th className="discord">Discord</th>
            <th className="points">Points</th>
          </tr>
        </thead>
        <tbody>
          {profiles.map((profile) => (
            <tr key={profile.id}>
              <td>{profile.discord}</td>
              <td>{profile.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}