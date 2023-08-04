import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { videosAPI } from "./videosAPI";


const initialState = {
    isLoading:false,
    videos:[],
    isError:false,
    error:''
}


export const fetchVideosApi = createAsyncThunk('fetchVideos',async()=>{
    const videos = await videosAPI()
    return videos;
})


const videosSlice = createSlice({
    name:'videos',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchVideosApi.pending,(state)=>{
            state.isLoading = true,
            state.isError = false,
            state.videos = []
        });
        builder.addCase(fetchVideosApi.fulfilled,(state,action)=>{
            state.isLoading = false,
            state.isError = false,
            state.videos = action.payload;
        });
        builder.addCase(fetchVideosApi.rejected,(state,action)=>{
            state.isLoading = false,
            state.isError = true,
            state.error = action.error?.message
        })
    }
})

export default videosSlice.reducer;