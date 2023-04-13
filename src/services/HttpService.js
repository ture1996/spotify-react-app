import axios from "axios";

class HttpService {
  constructor() {
    this.httpClient = axios.create({ baseURL: "https://api.spotify.com/v1/" });
  }
}

export const httpService = new HttpService()