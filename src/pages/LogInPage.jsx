import SpotifyLoginButton from "../components/SpotifyLoginButton";
import "../App.css";

function LogInPage(token) {
  return (
    <div className="container">
      <SpotifyLoginButton />
    </div>
  );
}

export default LogInPage;
