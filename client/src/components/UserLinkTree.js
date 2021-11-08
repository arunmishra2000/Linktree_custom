import React, { useState, useEffect } from "react";
import axios from "axios";
import UserHeader from "./UserHeader";
import Link from "./Link";
import NotFound from "./NotFound";
import ClipLoader from "react-spinners/ClipLoader";
import "../themes.css";
import Particle from "./Particle";

const UserLinkTree = (props) => {
  const [links, setLinks] = useState([]);
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [theme, setTheme] = useState(0);
  //const [avatar, setAvatar] = useState(avatar);
  const [userAvatar, setUserAvatar] = useState("");

  useEffect(() => {
    const getLinks = () => {
      axios
        .get(`/users/${props.match.params.username}`)
        .then((res) => {
          setLinks(res.data.links);
          setUsername(res.data.username);
          setTheme(res.data.theme);
          setLoading(false);
          setUserAvatar(res.data.avatar);
        })
        .catch((err) => {
          console.log(err.response);
          setNotFound(true);
        });
    };
    getLinks();
  }, [props.match.params.username]);

  return loading && !notFound ? (
    <div className="green-container" style={{ overflow: "hidden" }}>
      <div className="loader">
        <ClipLoader
          sizeUnit={"px"}
          size={150}
          color={"rgb(31, 28, 28)"}
          loading={true}
        />
      </div>
      <Particle />
    </div>
  ) : notFound ? (
    <NotFound />
  ) : (
    <div
      className={theme === 1 ? "green-container" : `theme-${theme}`}
      style={{ overflow: "hidden" }}
    >
      <UserHeader username={username} avatar={userAvatar} />
      <div className="linksList">
        {links.length > 0 ? (
          links.map((link) => <Link key={link._id} link={link} />)
        ) : (
          <h1 className="empty-linktree">User's Linktree is empty!</h1>
        )}
      </div>
      <Particle />
    </div>
  );
};

export default UserLinkTree;
