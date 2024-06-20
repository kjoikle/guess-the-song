import SpotifyGetPlaylists from "./components/SpotifyGetPlaylists";
import SpotifyLoginButton from "./components/SpotifyLoginButton";
import "./App.css"

// TO DO:
// fix formatting of playlists -- want multiple per row
// clicking playlist button redirects to gameplay page for that specific playlist
// header with nav bar -- also indicates that user is logged in
// add option of all liked songs -- https://developer.spotify.com/documentation/web-api/reference/get-users-saved-tracks ?? 

function App() {

  return (
    <div className="container">
      <SpotifyLoginButton />
      <SpotifyGetPlaylists />
    </div>
  );

}
export default App;
