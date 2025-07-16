import axios from "axios";
import { LoginUser } from "../models/LoginUser";
import { LoginAdmin } from "../models/LoginAdmin";
const baseUrl =
	"https://regist-serve-10082995091.development.catalystappsail.com/registration/api";

const loginService = {
	loginUser: async (user: LoginUser) => {
		const loginUserUrl = `${baseUrl}/loginUser`;
		try {
			const response = await axios.post(loginUserUrl, user, {
				withCredentials: true,
				headers: {
					"Content-Type": "application/json",
				},
			});
			return response.data;
		} catch (error) {
			throw error;
		}
	},

	loginAdmin: async (admin: LoginAdmin) => {
		const loginAdminUrl = `${baseUrl}/loginAdmin`;
		try {
			const response = await axios.post(loginAdminUrl, admin, {
				withCredentials: true,
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

export default loginService;
