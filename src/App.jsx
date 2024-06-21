import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Game from "./pages/Game";
import Layout from "./Layout";
import { useState, useEffect } from "react";

// TO DO:
// rethink page structure -- maybe have login page, playlist select page, game page ??
// clicking playlist button redirects to gameplay page for that specific playlist
// header with nav bar -- also indicates that user is logged in !! should be easy now that token state is moved ??

// fix formatting of playlists -- want multiple per row
// add option of all liked songs -- https://developer.spotify.com/documentation/web-api/reference/get-users-saved-tracks ??

function App() {
  const [token, setToken] = useState("");

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setToken(localStorage.getItem("accessToken"));
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/*" element={<Home token={token} />} />
          <Route path="/game" element={<Game />} />
        </Route>
      </Routes>
    </Router>
  );
}
export default App;
