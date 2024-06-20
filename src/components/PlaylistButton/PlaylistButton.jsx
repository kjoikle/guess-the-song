import "./PlaylistButton.css"

function PlaylistButton(item) {

    const playlistName = item?.playlist?.name ?? "Unknown"

    return (
        <div className="container">
            <button className="playlistBtn">{playlistName}</button>
        </div>
    )

}

export default PlaylistButton;