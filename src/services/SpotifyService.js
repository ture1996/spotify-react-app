import ApiService from "./ApiService";

class SpotifyService extends ApiService {
  getPlaylists = async () => {
    const { data } = await this.client.get(
      "browse/featured-playlists?country=RS&locale=en_rs&timestamp=2023-04-13T07%3A20%3A27&offset=0&limit=15",
      {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("token")}`,
        },
      }
    );
    return data;
  };

  getAlbums = async () => {
    const { data } = await this.client.get(
      "browse/new-releases?country=RS&locale=en-US%2Cen%3Bq%3D0.9&offset=0&limit=20",
      {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("token")}`,
        },
      }
    );
    return data;
  };

  getAlbumOrPlaylist = async (type, playlist, tracks) => {
    const { data } = await this.client.get(
      `${type}/${playlist}/${tracks ? "tracks" : ""}`,
      {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("token")}`,
        },
      }
    );
    return data;
  };
}

export const spotifyService = new SpotifyService();
