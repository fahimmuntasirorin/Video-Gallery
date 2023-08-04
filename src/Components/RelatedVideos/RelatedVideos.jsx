import { useDispatch, useSelector } from "react-redux";
import RelatedVideo from "./RelatedVideo";
import { useEffect } from "react";
import { fetchRelatedVideos } from "../../Features/Recommended/relatedVideosSlice";
import Loading from "../../Utils/Loading/Loading";

const RelatedVideos = ({video}) => {
    const {id,tags} = video;
    console.log(tags,id);
    const {relatedVideos,isLoading,isError} = useSelector(state=>state.relatedVideos);
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchRelatedVideos({id,tags}))
    },[dispatch,id,tags])
    
    let content = '';
    if(isLoading){
        content = <Loading/>
    }
    if(!isLoading && !isError){
        content = relatedVideos.map(video=><RelatedVideo key={video.id} video={video} />)
    }


    return (
        <div
            className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto"
        >
            {/* <!-- single related video --> */}
            {content}
        </div>
    );
};

export default RelatedVideos;