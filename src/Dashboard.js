import React from "react";
import { useAuth } from "./AuthContext";

const Dashboard = () => {
    const { currentUser, logout } = useAuth();

    return (
        <div>
            <h1>Welcome, {currentUser?.email}</h1>
            <button onClick={logout}>Logout</button>
        </div>
    );
};

export default Dashboard;
