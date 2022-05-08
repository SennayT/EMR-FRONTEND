import axios from 'axios';

const baseUrl = "https://capstone-backend-0957-11-v2.herokuapp.com"

const app = axios.create({
    baseURL: baseUrl,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',

    },
    withCredentials: true
})

export default app;
