import { configureStore } from "@reduxjs/toolkit";
import videosReducer from "../Features/videos/videosSlice";
import videoReducer from "../Features/video/videoSlice";
import tagsReducer from "../Features/Tags/TagsSlice";

const store = configureStore({
    reducer:{
        videos:videosReducer,
        video:videoReducer,
        tags:tagsReducer
    }
});

export default store;