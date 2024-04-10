import axios from 'axios';
import { User } from '../models/User';

const baseUrl = 'http://localhost:6060/registration/api';
const registrationUrl = `${baseUrl}/addUser`;

const registrationService = {
  registerUser: async (user:User) => {
    try {
      const response = await axios.post(registrationUrl, user);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};

export default registrationService;
