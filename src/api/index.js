import axios from 'axios';

const API_URL = 'https://psoft-api.herokuapp.com/api';

export const fetchProducts = () => {
    return axios.get(`${API_URL}/produto`);
}