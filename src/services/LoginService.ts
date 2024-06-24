import axios from "axios";
import { Admin } from "../models/Admin";
import { LoginUser } from "../models/LoginUser";
import { LoginAdmin } from "../models/LoginAdmin";
const baseUrl =
	"https://registration-service-10082976201.development.catalystappsail.com/api";

const loginService = {
	loginUser: async (user: LoginUser) => {
		const loginUserUrl = `${baseUrl}/loginUser`;
		try {
			const response = await axios.post(loginUserUrl, user);
			return response.data;
		} catch (error) {
			throw error;
		}
	},

	loginAdmin: async (admin: LoginAdmin) => {
		const loginAdminUrl = `${baseUrl}/loginAdmin`;
		try {
			const response = await axios.post(loginAdminUrl, admin);
			return response.data;
		} catch (error) {
			throw error;
		}
	},
};

export default loginService;
