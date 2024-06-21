import { useState } from "react";
import axios from "axios";
import "./PlaylistButton.css";
import { Link } from "react-router-dom";

// change track limit from 100
// still seems to cause problems when clicked for the first time ? unsure if this is just a lag in console display ??

function PlaylistButton({ playlist, token, setPlaylist }) {
  const playlistName = playlist.name ?? "Unknown";
  const imgURL = playlist.images[0]?.url;

  return (
    <>
      <div className="container">
        <img className="playlistImg" src={imgURL} />
        <Link to="/game">
          <button
            onClick={() => {
              setPlaylist(playlist);
            }}
            className="playlistBtn"
          >
            {playlistName}
          </button>
        </Link>
      </div>
    </>
  );
}

export default PlaylistButton;
