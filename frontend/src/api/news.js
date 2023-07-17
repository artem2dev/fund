import { useAxios } from './axiosConfig';

export const getNew = async (newId) => useAxios.get(`news/${newId}`);

export const getNews = async () => useAxios.get(`news`);

export const createNew = async (data) => useAxios.post(`news`, data);
