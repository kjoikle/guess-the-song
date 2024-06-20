import { useEffect, useState } from "react";

function SpotifyGetPlaylists() {
  const [token, setToken] = useState("");
  const [data, setData] = useState({});

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setToken(localStorage.getItem("accessToken"));
    }
  }, []);

  return <button>Get Playlists</button>;
}

export default SpotifyGetPlaylists;
