import axios from 'axios';

const API_URL = 'https://psoft-api.herokuapp.com';

export const fetchProducts = () => {
    return axios.get(`${API_URL}/api/produto`);
}