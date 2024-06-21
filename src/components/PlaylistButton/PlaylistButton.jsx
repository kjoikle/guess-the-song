import { useState } from "react";
import axios from "axios";
import "./PlaylistButton.css";

// change track limit from 100
// still seems to cause problems when clicked for the first time ? unsure if this is just a lag in console display ??

function PlaylistButton({ playlist, token }) {
  const playlistName = playlist.name ?? "Unknown";
  const imgURL = playlist.images[0]?.url;
  const [tracks, setTracks] = useState({});

  // gets tracks from playlist -- on press of button
  async function handleGetTracks() {
    const playlistEndpoint = playlist.tracks?.href ?? null;

    if (tracks.length > 0) {
      console.log(randomTrack());
      return;
    }

    try {
      const res = await axios.get(playlistEndpoint, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      setTracks(res.data.items);
      console.log(randomTrack(tracks));
    } catch (err) {
      throw err;
    }
  }

  // returns a random track from the tracks state
  function randomTrack() {
    if (tracks.length > 0) {
      const trackNum = Math.floor(Math.random() * tracks.length);
      return tracks[trackNum].track.name;
    } else {
      console.log("No tracks available");
      return null;
    }
  }

  return (
    <>
      <div className="container">
        <img className="playlistImg" src={imgURL} />
        <button onClick={handleGetTracks} className="playlistBtn">
          {playlistName}
        </button>
      </div>
    </>
  );
}

export default PlaylistButton;
