import axiosInstance from "../../Utils/Axios/axios"

const relatedVideosAPI = async({id,tags})=>{
    let queryString = ''
    if(tags.length > 0){
        queryString = tags.map(tag=>`tags_like=${tag}`).join("&") +`&id_ne=${id}&limit=5`
    }else{
        queryString = `&id_ne=${id} &limit=5`
    }
    const response = await axiosInstance(`/videos?${queryString}`)
    return response.data;
}
export default relatedVideosAPI;