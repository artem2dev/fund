import { useAxios } from './axiosConfig';

export const loginUser = async (params) => useAxios.post(`admin/auth/login`, params, { withCredentials: true });

export const refreshTokens = async () => useAxios.get(`admin/auth/refresh`, { withCredentials: true });

export const signOut = async () => useAxios.get(`admin/auth/sign-out`, { withCredentials: true });
