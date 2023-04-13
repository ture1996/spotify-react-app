import axios from "axios";

class AuthService {
  constructor() {
    this.client = axios.create({ baseURL: "https://accounts.spotify.com/" });
  }

  #credentials = {
    grant_type: "client_credentials",
    client_id: "0d34c7028cd54fd98a1903a003dec293",
    client_secret: "057b823ceff945359ff8478baa18c30f",
  };

  login = async () => {
    const { data } = await this.client.post("api/token", this.#credentials, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    window.localStorage.setItem("token", data.access_token);
    return data.access_token;
  };
}

export const authService = new AuthService();
