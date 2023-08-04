
import { useDispatch, useSelector } from "react-redux";
import Description from "../../Components/Description/Description";
import RelatedVideos from "../../Components/RelatedVideos/RelatedVideos";
import Player from "../../Components/VideoPlayer/Player";
import { useEffect } from "react";
import { fetchVideo } from "../../Features/video/videoSlice";
import { useParams } from "react-router-dom";

const Video = () => {
    const {video} = useSelector(state=>state.video)
    console.log(video);
    const {videoId}= useParams()
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchVideo(videoId))
    },[dispatch,videoId])


    return (
        <section className="pt-6 pb-20">
            <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
                <div className="grid grid-cols-3 gap-2 lg:gap-8">
                    <div className="col-span-full w-full space-y-8 lg:col-span-2">
                        {/* <!-- video player --> */}
                        <Player video={video}/>
                        {/* <!-- video description --> */}
                        <Description video={video}/>
                    </div>
                    {/* <!-- related videos --> */}
                    <RelatedVideos/>
                </div>
            </div>
        </section>
    );
};

export default Video;