import React from "react";
import { useUser } from "@clerk/clerk-react";

const Dashboard = () => {
  const { user } = useUser();

  return (
    <div className="container">
      <h1>Dashboard</h1>
      <p>Hello, <b>{user.username}</b>! You're signed in 🎉</p>
    </div>
  );
};

export default Dashboard;
