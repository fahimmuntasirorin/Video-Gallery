import { configureStore } from "@reduxjs/toolkit";
import videosReducer from "../Features/videos/videosSlice";
import videoReducer from "../Features/video/videoSlice";
import tagsReducer from "../Features/Tags/TagsSlice";
import relatedVideosReducer from "../Features/Recommended/relatedVideosSlice";

const store = configureStore({
    reducer:{
        videos:videosReducer,
        video:videoReducer,
        tags:tagsReducer,
        relatedVideos: relatedVideosReducer
    }
});

export default store;