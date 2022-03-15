import axios from 'axios';
import secret from '../secrets/secret';

export const api_call = axios.create({
    baseURL: "",
    headers: {
        "x-api-key": secret
    }
});