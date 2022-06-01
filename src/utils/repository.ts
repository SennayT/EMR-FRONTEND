import axios, { AxiosResponse } from 'axios';

const instance = axios.create({
	baseURL: 'http://capstone-backend-0957-11-v2.herokuapp.com/',
	timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response;

const requests = {
	get: (url: string) => instance.get(url).then(responseBody),
	post: (url: string, body: {}) => instance.post(url, body).then(responseBody),
	put: (url: string, body: {}) => instance.put(url, body).then(responseBody),
	delete: (url: string) => instance.delete(url).then(responseBody),
};


export default requests;
