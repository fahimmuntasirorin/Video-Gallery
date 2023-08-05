import axiosInstance from "../../Utils/Axios/axios"

export const videosAPI = async({tags})=>{
    console.log(tags);
    let queryString = "";
    if(tags.length > 0){
        queryString += tags.map(tag=>`tags_like=${tag}`).join("&")
    }
    const response = await axiosInstance(`/videos?${queryString}`);
    return response.data;
}