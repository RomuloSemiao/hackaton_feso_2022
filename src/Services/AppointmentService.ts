import HttpClient from './utils/HttpClient';

class AuthService {
  httpClient: HttpClient;

  constructor() {
    this.httpClient = new HttpClient('https://sodafront-ehealth-backend.herokuapp.com');
  }

  async appointment() {

    return this.httpClient.get('/appointments');
  }
}

export default new AuthService();
