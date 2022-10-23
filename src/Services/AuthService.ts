import HttpClient from './utils/HttpClient';

class AuthService {
  httpClient: HttpClient;

  constructor() {
    this.httpClient = new HttpClient('https://sodafront-ehealth-backend.herokuapp.com');
  }

  async authenticate(email: string, password: string) {
    const data = {
      email,
      password,
    };

    console.log(data)

    return this.httpClient.post('/auth/sign_in', data);
  }
}

export default new AuthService();
