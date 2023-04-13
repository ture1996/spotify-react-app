import { Link } from "react-router-dom";

export const Playlists = ({
  playlists,
  setIsPlaylists,
  label,
  type,
  tracks,
}) => {
  return (
    <>
      <div className="main-body-1">
        <div className="main-label-1">
          <div className="label-items-1">
            <span className="label-item-1" onClick={() => setIsPlaylists(true)}>
              {label}
            </span>
            <span className="label-item-2" onClick={() => setIsPlaylists(true)}>
              Show all
            </span>
          </div>
        </div>
        <div className="main-something-else">
          <div className="grid-container">
            {playlists?.map((playlist) => (
              <>
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
        </div>
      </div>
    </>
  );
};
