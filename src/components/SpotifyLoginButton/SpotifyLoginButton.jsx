import { useEffect, useState } from "react";
import "./SpotifyLoginButton.css";

const CLIENT_ID = "763403119bd747cea51c6fb25350f843";
const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";
const REDIRECT_URL_AFTER_LOGIN = "http://localhost:5173";
const SCOPES = ["playlist-read-private", "user-library-read"];
const SPACE_DELIMITER = "%20";
const SCOPES_URL_PARAM = SCOPES.join(SPACE_DELIMITER);

function getReturnedParamsFromSpotifyAuth(hash) {
  const stringAfterHashtag = hash.substring(1);
  const paramsInUrl = stringAfterHashtag.split("&");
  const paramsSplitUp = paramsInUrl.reduce((accumulater, currentValue) => {
    const [key, value] = currentValue.split("=");
    accumulater[key] = value;
    return accumulater;
  }, {});

  return paramsSplitUp;
}

function SpotifyLoginButton() {
  useEffect(() => {
    if (window.location.hash) {
      const { access_token, expires_in, token_type } =
        getReturnedParamsFromSpotifyAuth(window.location.hash);

      localStorage.clear();

      localStorage.setItem("accessToken", access_token);
      localStorage.setItem("tokenType", token_type);
      localStorage.setItem("expiresIn", expires_in);
    }
  });

  function handleLogin() {
    window.location.href = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true`;
  }

  return (
    <button className="loginBtn" onClick={handleLogin}>
      Login in to Spotify
    </button>
  );
}

export default SpotifyLoginButton;
