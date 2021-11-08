import React from "react";
import { Link } from "react-router-dom";
import Img from "../assests/bg.png";
import Particle from "./Particle";
const Home = () => {
  return (
    <div className="green-container" style={{ overflow: "hidden " }}>
      <div
        className="image-container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "50px",
        }}
      >
        <img src={Img} alt="logo" width="200px" />
      </div>
      <br />
      <br />
      <br />
      <br />
      <center>
        <h1 style={{ fontSize: "1.5rem" }}>
          A portal to display all the important links.
        </h1>
      </center>
      <div className="buttons">
        <Link to="/login" className="sign-in-button">
          <p>Log In!</p>
        </Link>
        <span id="or">or</span>
        <Link to="/signup" className="sign-in-button">
          <p>Sign Up!</p>
        </Link>
      </div>
      <Particle />
    </div>
  );
};

export default Home;
