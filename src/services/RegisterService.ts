import axios from "axios";
import { User } from "../models/User";

const baseUrl =
	"https://regist-serve-10082995091.development.catalystappsail.com/api";
const registrationUrl = `${baseUrl}/addUser`;

const registrationService = {
	registerUser: async (user: User) => {
		try {
			const response = await axios.post(registrationUrl, user, {
				headers: {
					"Content-Type": "application/json",
				},
			});
			return response.data;
		} catch (error) {
			throw error;
		}
	},
};

export default registrationService;
