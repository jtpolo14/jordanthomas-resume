import axios from 'axios';
import secret from '../secrets/secret';

export const api_call = axios.create({
    baseURL: "",
    headers: {
        "x-api-key": secret
    }
});

export const api_call_test = [
    {"name":"BTC", "price" : 44000 },
    {"name":"ETH", "price" : 3100 }
]

export const api_call_test_indices = [
    {"name" : "SPY", "price" : 44000 },
    {"name" : "QQQ", "price" : 3100 },
    {"name" : "DIA", "price" : 3100 }
]