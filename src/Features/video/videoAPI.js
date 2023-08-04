import axiosInstance from "../../Utils/Axios/axios"

export const fetchVideoAPI = async (videoId)=>{
    const response = await axiosInstance(`/videos/${videoId}`)
    return response.data;
}