import SpotifyGetPlaylists from "../components/SpotifyGetPlaylists";

function PlaylistSelection({ token, setPlaylist }) {
  return (
    <>
      <h2>Select Playlist: </h2>
      <SpotifyGetPlaylists token={token} setPlaylist={setPlaylist} />
    </>
  );
}

export default PlaylistSelection;
