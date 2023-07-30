import { useAxios } from "./axiosConfig";

export const getNewById = async (newId) => useAxios.get(`news/${newId}`);

export const getNews = async () => useAxios.get(`news`);

export const createNew = async (data) => useAxios.post(`news`, data);

export const deleteNew = async (newId) => useAxios.delete(`news/${newId}`);
