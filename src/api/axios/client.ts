import axios, { AxiosInstance, AxiosResponse } from 'axios';
import Constants from 'expo-constants';

const API_KEY = Constants?.manifest?.extra?.tmdbApiKey;

const apiBase = (token?: string) => {
  const baseURL = 'https://api.themoviedb.org/3';
  return axios.create({
    baseURL,
  });
};

const api = (token?: string): AxiosInstance => {
  const instance = apiBase(token);
  instance.interceptors.response.use(
    ({ data }: AxiosResponse) => data,
    (error) => {
      return Promise.reject(error);
    }
  );
  return instance;
};

/**
 * request access token and store
 */
const auth = async () => {
  try {
    // const resp = await fetch(
    //   `https://api.themoviedb.org/3/authentication/token/new?api_key=${API_KEY}`,
    //   {
    //     method: 'GET',
    //   }
    // );
    // const result = await axios.get(
    //   `https://api.themoviedb.org/3/authentication/token/new?api_key=${API_KEY}`
    // );
    //TODO: check why env is undefined
    const result = await apiBase().get(
      `/authentication/token/new?api_key=${API_KEY}`
    );
    // const result = await resp.json();
    console.log({ result });
  } catch (error) {
    console.error('auth error', error);
  }
};

const client = {
  api,
  auth,
};
export default client;
