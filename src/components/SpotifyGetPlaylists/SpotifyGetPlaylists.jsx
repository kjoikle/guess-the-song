import { useEffect, useState } from "react";
import axios from "axios";
import PlaylistButton from "../PlaylistButton/PlaylistButton";
import "./SpotifyGetPlaylists.css"

const PLAYLISTS_ENDPOINT = "https://api.spotify.com/v1/me/playlists"
const LIKED_SONGS_ENDPOINT = "https://api.spotify.com/v1/me/tracks"

function SpotifyGetPlaylists() {
  const [token, setToken] = useState("");
  const [data, setData] = useState({});

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setToken(localStorage.getItem("accessToken"));
    }
  }, []);

  async function handleGetPlaylists() {
    let res = await axios.get(PLAYLISTS_ENDPOINT, {
        headers: {
            Authorization: "Bearer " + token,
        },
    })
    setData(res.data);
  }

  return (
    <>
      <button onClick={handleGetPlaylists}>Get Playlists</button>

      <div className="playlistsContainer">
        {data?.items ? data.items.map( (item) => {return <PlaylistButton key={item.id} playlist={item}/>}) : null}
      </div>
    </>
    )
}

export default SpotifyGetPlaylists;
