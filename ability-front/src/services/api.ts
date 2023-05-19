import axios from 'axios';
import { parseCookies } from 'nookies';

const { 'ability-token': token } = parseCookies();
const baseURL = `${process.env.NEXT_PUBLIC_API_BASE_URL}`;

export const api = axios.create({ baseURL });

if (token) {
	api.defaults.headers['Authorization'] = `Bearer ${token}`;
}
