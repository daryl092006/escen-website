import axios from 'axios';
import config from '../../config';
export default defineNuxtPlugin(() => {
  const baseURL = (import.meta.server && process.env.ESCEN_SSR_API_URL) ? process.env.ESCEN_SSR_API_URL : config.app_dev_url;
  const client = axios.create({ baseURL, timeout: 20000, headers: { Accept: 'application/json' } });
  return { provide: { axios: client } };
});
