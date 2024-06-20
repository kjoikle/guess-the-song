import { useEffect, useState } from "react";
import axios from "axios";
import "./PlaylistButton.css"

// change track limit from 100

function PlaylistButton(item) {

    const playlistName = item?.playlist?.name ?? "Unknown"
    const imgURL = item.playlist.images[0]?.url

    // move token state to a parent component to share between components on this page
    const [token, setToken] = useState("");
    const [tracks, setTracks] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (localStorage.getItem("accessToken")) {
            setToken(localStorage.getItem("accessToken"));
    }
    }, []);

    async function handleGetTracks() {
        const playlistEndpoint = item.playlist.tracks?.href ?? null

        if (tracks.length > 0) {
            console.log(randomTrack())
            return;
        }

        try {
            setLoading(true);
            setError(null);

            const res = await axios.get(playlistEndpoint, {
                headers: {
                    Authorization: "Bearer " + token,
                },
            })

            setTracks(res.data.items);
            setLoading(false);            
            console.log(randomTrack(tracks))
        } catch (err) {
            setLoading(false);
            setError("Failed to fetch tracks :(");
            throw(err)
        }                
    }

    function randomTrack() {

        if (tracks.length > 0) {
            const trackNum = Math.floor(Math.random() * tracks.length);
            return tracks[trackNum].track.name;   
        } else {
            console.log("No tracks available")
            return null;
        }     
    }

          
        // data?.items[0]?.track?.name ? console.log(data.items[0].track.name) : "Unknown...";

    return (
        <>
            <div className="container">
                <img className="playlistImg" src={imgURL} />
                <button onClick={handleGetTracks} className="playlistBtn">{playlistName}</button>
            </div>
        </>
    )

}

export default PlaylistButton;