import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Card.css"


const UserList = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = () => {
    axios.get("http://localhost:8088/user/rankedUsers")
      .then(response => setUsers(response.data))
      .catch(error => console.error("Error fetching users:", error));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleAddPoints = async (userName) => {
    try {
      const randomRes = await axios.get("http://localhost:8088/user/random");
      const pointsToAdd = parseInt(randomRes.data.randomNumber);

      await axios.post("http://localhost:8088/user/updatePoints", {
        name: userName,
        pointsToAdd
      });

      fetchUsers();
    } catch (err) {
      console.error("Error updating points:", err);
    }
  };

  return (
    <>
    
    
    <div className="DashBoard">
      <h1>LeaderBoard</h1>
      <ul className="Dashboard_ui">
        {users.map((user) => (
          <li key={user._id}>
            <strong>{user.rank}</strong> {user.Name} - {user.Points} points 🔥
            <div className="Button">
            <button className="btn" onClick={() => handleAddPoints(user.Name)} >
              Claim Points
            </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
};

export default UserList;
