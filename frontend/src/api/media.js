import { useAxios } from "./axiosConfig";

export const uploadImage = async (formData) =>
	useAxios.post(`media/upload`, formData, {
		headers: { "Content-Type": "multipart/form-data" },
	});
