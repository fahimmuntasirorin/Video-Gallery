import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import relatedVideosAPI from "./relatedVidiosAPI";
const initialState = {
    isLoading : false,
    isError:false,
    relatedVideos:[],
    error:''
}
export const fetchRelatedVideos = createAsyncThunk('fetchRelatedVideos',async({id,tags})=>{
    const relatedVideos = await relatedVideosAPI({id,tags})
    return relatedVideos;
})

const relatedVideosSlice = createSlice({
    name:"recommendedVidios",
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchRelatedVideos.pending,(state)=>{
            state.isLoading = true,
            state.isError = false,
            state.relatedVideos = [],
            state.error = ''
        });
        builder.addCase(fetchRelatedVideos.fulfilled,(state,action)=>{
            state.isLoading = false,
            state.isError = false,
            state.relatedVideos = action.payload,
            state.error = ''
        });
        builder.addCase(fetchRelatedVideos.rejected,(state,action)=>{
            state.isLoading = false,
            state.isError = false,
            state.relatedVideos = []
            state.error = action.error?.message
        });
    }
});


export default relatedVideosSlice.reducer;