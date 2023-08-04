import { configureStore } from "@reduxjs/toolkit";
import videosReducer from "../Features/videos/videosSlice";
import videoReducer from "../Features/video/videoSlice";
const store = configureStore({
    reducer:{
        videos:videosReducer,
        video:videoReducer
    }
});

export default store;