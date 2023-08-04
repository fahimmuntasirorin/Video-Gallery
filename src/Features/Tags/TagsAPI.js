import axiosInstance from "../../Utils/Axios/axios"

export const tagsAPI = async()=>{
    const response = await axiosInstance('/tags')
    return response.data;
}