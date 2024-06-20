import { useEffect, useState } from "react";
import axios from "axios";
import PlaylistButton from "../PlaylistButton/PlaylistButton";
import "./SpotifyGetPlaylists.css"

const PLAYLISTS_ENDPOINT = "https://api.spotify.com/v1/me/playlists"

function SpotifyGetPlaylists() {
  const [token, setToken] = useState("");
  const [data, setData] = useState({});

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setToken(localStorage.getItem("accessToken"));
    }
  }, []);

  function handleGetPlaylists() {
    axios.get(PLAYLISTS_ENDPOINT, {
        headers: {
            Authorization: "Bearer " + token,
        },
    }).then(resp => {
        setData(resp.data);
    }).catch(err => {
        console.log(err);
    })
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
