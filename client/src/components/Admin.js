import React from "react";
import NewLink from "./NewLink";
import AdminHeader from "./AdminHeader";
import { Link } from "react-router-dom";
import Particle from "./Particle";

const Admin = ({ username }) => {
  return (
    <div>
      <AdminHeader admin={"active"} />

      <div className="flex-container">
        <NewLink username={username} />
        <Link to={`/${username}`} target="_blank" className="sign-in-button">
          {username}'s Links
        </Link>
      </div>
      <Particle />
    </div>
  );
};

export default Admin;
