import SpotifyGetPlaylists from "../components/SpotifyGetPlaylists";
import SpotifyLoginButton from "../components/SpotifyLoginButton";
import "../App.css";

function Home({ token }) {
  return (
    <div className="container">
      <SpotifyLoginButton />
      <SpotifyGetPlaylists token={token} />
    </div>
  );
}

export default Home;
