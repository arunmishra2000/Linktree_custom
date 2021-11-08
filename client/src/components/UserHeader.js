import React from "react";
import Img from "../assests/bg.png";
import Particle from "./Particle";

const UserHeader = ({ username, avatar }) => {
  return (
    <header className="userContainer">
      <img className="avatarStyle" src={Img} alt="user avatar" />
      <h2>{`@${username}`}</h2>
    </header>
  );
};

export default UserHeader;
