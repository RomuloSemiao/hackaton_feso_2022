import HttpClient from './utils/HttpClient';

interface ICreate {
  email: string;
  password: string;
  confirmPassword: string;
}

class CreateAccountService {
  httpClient: HttpClient;

  constructor() {
    this.httpClient = new HttpClient('https://sodafront-ehealth-backend.herokuapp.com');
  }

  async create({
    email, password, confirmPassword,
  }: ICreate) {
    const data = {
      email,
      password,
      confirmPassword,
    };

    return this.httpClient.post('/auth/register', data);
  }
}

export default new CreateAccountService();
