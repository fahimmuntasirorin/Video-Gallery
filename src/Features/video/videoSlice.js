import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchVideoAPI } from "./videoAPI";

const initialState = {
    isLoading:false,
    isError:false,
    video:{},
    error:''
}

export const fetchVideo = createAsyncThunk('fetchvideo',async(videoId)=>{
    const video = fetchVideoAPI(videoId);
    return video;
}
)
const videoSlice = createSlice({
    name:'video',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchVideo.pending,(state)=>{
            state.isLoading = true,
            state.isError = false,
            state.video = {},
            state.error = ''
        });
        builder.addCase(fetchVideo.fulfilled,(state,action)=>{
            state.isLoading = false,
            state.video = action.payload,
            state.isError = false,
            state.error = ''
        });
        builder.addCase(fetchVideo.rejected,(state,action)=>{
            state.isLoading = false,
            state.video = {},
            state.isError = true,
            state.error = action.error?.message;
        })
    }
});
export default videoSlice.reducer;