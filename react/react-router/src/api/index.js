import axios from "axios";

const axiosInstance = axios.create({
	// axios 객체가 가질 속성의 정보
	baseURL: "https://dummyjson.com",
	headers: {},
	timeout: 5000,
});

export default axiosInstance;
