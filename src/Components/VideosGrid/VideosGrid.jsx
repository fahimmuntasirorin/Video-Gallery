import { useDispatch, useSelector } from "react-redux";
import Video from "./Video";
import { useEffect } from "react";
import { fetchVideosApi } from "../../Features/videos/videosSlice";
import Loading from "../../Utils/Loading/Loading";
const VideosGrid = () => {
    const {selectedTags:tags} = useSelector(state=>state.filters)
    console.log(tags);
    const {isLoading,isError , videos} = useSelector(state=>state.videos);
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchVideosApi({tags}))
    },[dispatch,tags])
    console.log(videos);
    let content = '';

    if(isLoading){
        content = <Loading/>
    }
    if(!isLoading && isError){
        content = <div className="col-span-12">some error happened</div>
    }
    if(!isLoading && !isError && videos.length > 0){
        content = videos.map(video=><Video video={video} key={video.id}/>)
    }
    return (
        <section className="pt-12">
            <section className="pt-12">
                <div
                    className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]"
                >
                    {/* <!-- single video --> */}
                    {content}
                    
                </div>
            </section>
        </section>
    );
};

export default VideosGrid;