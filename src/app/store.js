import { configureStore } from "@reduxjs/toolkit";
import videosReducer from "../Features/videos/videosSlice";

const store = configureStore({
    reducer:{
        videos:videosReducer
    }
});

export default store;