import { useEffect, useState } from "react";
import axios from "axios";

// having issues with saving the random track -- is it state ?? idk it was being weird

function Game({ playlist, token }) {
  const [tracks, setTracks] = useState({});

  // gets tracks from playlist
  async function handleGetTracks() {
    const playlistEndpoint = playlist.tracks?.href ?? null;

    try {
      const res = await axios.get(playlistEndpoint, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      setTracks(res.data.items);
    } catch (err) {
      throw err;
    }
  }

  useEffect(() => {
    handleGetTracks();
  });

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
      <h1>Game</h1>
      <h2>{playlist.name}</h2>
    </>
  );
}

export default Game;
