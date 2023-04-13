import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { spotifyService } from "../services/SpotifyService";
import { authService } from "../services/AuthService";

export const PlayerSpotify = () => {
  const { type } = useParams();
  const { id } = useParams();
  const { tracks } = useParams();
  const [playlists, setPlaylists] = useState({});
  const [isValid, setValid] = useState(false);

  const loginIntoApp = async () => {
    const data = await authService.login();
    console.log(data);
    return data;
  };

  const getData = async () => {
    try {
      if (window.localStorage.getItem("token")) {
        const data = await spotifyService.getAlbumOrPlaylist(type, id, tracks);
        setPlaylists(data);
        console.log(data);
        return;
      }
      loginIntoApp();
      setValid(true);
    } catch (error) {
      if (error.response.data.error.message === "The access token expired") {
        loginIntoApp();
        getData();
        setValid(true);
        return;
      }
    }
  };

  useEffect(() => {
    getData();
  }, [isValid]);

  return (
    <>
      <div className="player-background">
        
      </div>
    </>
  );
};
