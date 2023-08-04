import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    selectedTags:[],
    search:''
}
const filterSlice = createSlice({
    name:'filter',
    initialState,
    reducers:{
        tagSelected:(state,action)=>{
            state.selectedTags.push(action.payload)
        },
        tagRemoved:(state,action)=>{

            const indexToRemove = state.selectedTags.indexOf(action.payload)
            if(indexToRemove !== -1){
                state.selectedTags.splice(indexToRemove , 1)
            }
        }
    }
})

export default filterSlice.reducer;
export const {tagSelected,tagRemoved} = filterSlice.actions 