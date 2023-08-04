import axiosInstance from "../../Utils/Axios/axios"

export const videosAPI = async()=>{
    const response = await axiosInstance('/videos');
    return response.data;
}