import { useEffect, useState } from "react";
import { authService } from "../services/AuthService";
import { spotifyService } from "../services/SpotifyService";
import { Playlists } from "../details/Playlists";
import { ShowAllPlaylists } from "../details/ShowAllPlaylists";

export const MainSpotify = () => {
  const [albums, setAlbums] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [isValid, setValid] = useState(false);
  const [isAlbums, setIsAlbums] = useState(false);
  const [isPlaylists, setIsPlaylists] = useState(false);

  const loginIntoApp = async () => {
    const data = await authService.login();
    console.log(data);
    return data;
  };

  const getData = async () => {
    try {
      if (window.localStorage.getItem("token")) {
        const data = await spotifyService.getAlbums();
        setAlbums(data.albums.items);
        console.log(data.albums.items);
        const data2 = await spotifyService.getPlaylists();
        setPlaylists(data2.playlists.items);
        console.log(data2.playlists.items);
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
      {isAlbums ? (
        <ShowAllPlaylists type="albums" playlists={albums} tracks="tracks" />
      ) : isPlaylists ? (
        <ShowAllPlaylists type="playlists" playlists={playlists} tracks="" />
      ) : (
        <>
          <Playlists
            type="playlists"
            playlists={playlists}
            setIsPlaylists={setIsPlaylists}
            label="Featured Charts"
            tracks=""
          />
          <Playlists
            type="albums"
            playlists={albums}
            setIsPlaylists={setIsAlbums}
            label="Try something else"
            tracks="tracks"
          />
          <hr />
        </>
      )}
    </>
  );
};
