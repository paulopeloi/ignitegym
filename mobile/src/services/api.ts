import axios, { AxiosInstance } from 'axios';
import { AppError } from '@utils/AppError';

export const api: AxiosInstance = axios.create({
	baseURL: 'http://192.168.0.110:3333'
});

api.interceptors.response.use(response => response, error => {
	if (error.response && error.response.data) {		
		return Promise.reject(new AppError(error.response.data.message));
	} else {		
		return Promise.reject(error)
	}
});