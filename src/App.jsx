import SpotifyGetPlaylists from "./components/SpotifyGetPlaylists";
import SpotifyLoginButton from "./components/SpotifyLoginButton";
import "./App.css"

// add image to playlist button
// clicking playlist button redirects to gameplay page for that specific playlist

function App() {

  return (
    <div className="container">
      <SpotifyLoginButton />
      <SpotifyGetPlaylists />
    </div>
  );

}
export default App;
