import { Link } from "react-router-dom";

export const ShowAllPlaylists = ({ playlists, type, tracks }) => {
  return (
    <>
      <div className="grid-container-show">
        {playlists[0] &&
          playlists?.map((playlist) => (
            <>
              {console.log(playlist.id)}
              <Link
                className="link-style"
                to={`/${type}/${playlist.id}/${tracks}`}
              >
                <div className="grid-element-1">
                  <div className="grid-image-1">
                    <img alt="" src={`${playlist?.images[0].url}`} />
                  </div>
                  <div className="grid-description">
                    <h4 className="playlist-name">{playlist?.name}</h4>
                    <span>{playlist?.description}</span>
                  </div>
                </div>
              </Link>
            </>
          ))}
      </div>
    </>
  );
};
