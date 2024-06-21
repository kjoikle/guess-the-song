import { useState } from "react";
import axios from "axios";
import PlaylistButton from "../PlaylistButton";
import "./SpotifyGetPlaylists.css";

const PLAYLISTS_ENDPOINT = "https://api.spotify.com/v1/me/playlists";
const LIKED_SONGS_ENDPOINT = "https://api.spotify.com/v1/me/tracks"; // maybe use for a later implementation

function SpotifyGetPlaylists({ token, setPlaylist }) {
  const [data, setData] = useState({});

  async function handleGetPlaylists() {
    try {
      let res = await axios.get(PLAYLISTS_ENDPOINT, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setData(res.data);
    } catch (err) {
      throw err;
    }
  }

  return (
    <>
      <button onClick={handleGetPlaylists}>Get Playlists</button>

      <div className="playlistsContainer">
        {data?.items
          ? data.items.map((item) => {
              return (
                <PlaylistButton
                  key={item.id}
                  playlist={item}
                  token={token}
                  setPlaylist={setPlaylist}
                />
              );
            })
          : null}
      </div>
    </>
  );
}

export default SpotifyGetPlaylists;
