import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { tagsAPI } from "./TagsAPI";

const initialState = {
    isLoading :false,
    tags:[],
    isError:false,
    error:''
}

export const fetchTags = createAsyncThunk('fetchTags',async()=>{
    const tags = tagsAPI()
    return tags;
}
)
const tagSlice = createSlice({
    name:'tags',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchTags.pending,(state)=>{
            state.isLoading = true,
            state.isError = false,
            state.tags = []
        });
        builder.addCase(fetchTags.fulfilled,(state,action)=>{
            state.isLoading = false,
            state.isError = false,
            state.tags = action.payload
        });
        builder.addCase(fetchTags.rejected,(state,action)=>{
            state.isLoading = false,
            state.isError = true,
            state.tags = [],
            state.error =action.error?.message;
        });
    }
})

export default tagSlice.reducer;