import { createSlice } from '@reduxjs/toolkit';
import { fetchResult } from '../thunks/result/fetchResult';
import { fetchResultByUsername } from '../thunks/result/fetchResultByUsername';
const resultSlice = createSlice({
    name : "result" ,
    initialState : {
        data : [],
        isLoading : false,
        error : null ,
    },
    extraReducers(builder){

        /////////fetchResult//////
        builder.addCase(fetchResult.pending, (state,action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchResult.fulfilled, (state,action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchResult.rejected, (state,action) => {
            state.isLoading = false;
            state.error = action.error;
        });

        /////fetchResultByUsername////////
        builder.addCase(fetchResultByUsername.pending, (state,action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchResultByUsername.fulfilled, (state,action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchResultByUsername.rejected, (state,action) => {
            state.isLoading = false;
            state.error = action.error;
        });

    }
});

export const resultReducer = resultSlice.reducer;