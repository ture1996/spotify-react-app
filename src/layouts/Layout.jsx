import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Layout = () => {
  const [isHome, setHome] = useState(true);
  const data = useParams();

  useEffect(() => {
    console.log(Object.keys(data).length);
    if (Object.keys(data).length > 0) {
      setHome(false);
      return;
    }
    setHome(true);
  }, [data]);

  return (
    <div className="window">
      <div className="layout">
        <div className="nav-bar">
          <div className="spotify-image">
            <img
              className="image"
              alt="logo"
              src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"
            />
            <div className="buttons">
              {!isHome ? (
                <Link className="link-style" to="/">
                  <div className="home-button image-1">
                    <img className="image2" alt="home" src="Screenshot_1.png" />
                    <span>Home</span>
                  </div>
                </Link>
              ) : (
                <div className="home-button-selected">
                  <img className="image2" alt="home" src="Screenshot_11.png" />
                  <span>Home</span>
                </div>
              )}

              <div className="home-button image-2">
                <img className="image2" alt="search" src="Screenshot_5.png" />
                <span>Search</span>
              </div>
              <div className="home-button image-3">
                <img className="image2" alt="search" src="Screenshot_3.png" />
                <span>Your Library</span>
              </div>
            </div>
            <div className="buttons">
              <div className="playlist-button image-4">
                <img className="image3" alt="home" src="Screenshot_7.png" />
                <span>Create Playlist</span>
              </div>
              <div className="playlist-button image-5">
                <img className="image3" alt="search" src="Screenshot_9.png" />
                <span>Liked Songs</span>
              </div>
            </div>
            <hr className="end-line" />
          </div>

          <div className="empty-container" />
          <div className="other-items">
            <i className="fa fa-arrow-circle-o-down" />
            <span> Install App</span>
          </div>
        </div>
        <div className="main-container">
          <div className="main-header">
            <div className="header-items">
              <span>Back</span>
              <span>User</span>
            </div>
          </div>
          <Outlet />
        </div>
      </div>
      <div className="player"></div>
    </div>
  );
};
