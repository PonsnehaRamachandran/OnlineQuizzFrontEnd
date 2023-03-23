import { createSlice } from '@reduxjs/toolkit';
import { fetchSubject } from '../thunks/subject/fetchSubject';
import { addSubject } from '../thunks/subject/addSubject';
import { deleteSubject } from '../thunks/subject/deleteSubject';
const subjectSlice = createSlice({
    name : "subject" ,
    initialState : {
        data : [],
        isLoading : false,
        error : null ,
    },
    extraReducers(builder){

        /////////fetchSubject//////
        builder.addCase(fetchSubject.pending, (state,action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchSubject.fulfilled, (state,action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchSubject.rejected, (state,action) => {
            state.isLoading = false;
            state.error = action.error;
        });


        /////////////add subject///////
        builder.addCase(addSubject.pending, (state,action) => {
            state.isLoading = true;
        });
        builder.addCase(addSubject.fulfilled, (state,action) => {
            state.isLoading = false;
            state.data.push(action.payload);
        });
        builder.addCase(addSubject.rejected, (state,action) => {
            state.isLoading = false;
            state.error = action.error;
        });


         /////////////delete subject///////
         builder.addCase(deleteSubject.pending, (state,action) => {
            state.isLoading = true;
        });
        builder.addCase(deleteSubject.fulfilled, (state,action) => {
            state.isLoading = false;
            state.data = state.data.filter(subject => {
                return subject.subjectId !== action.payload.subjectId
            });
        });
        builder.addCase(deleteSubject.rejected, (state,action) => {
            state.isLoading = false;
            state.error = action.error;
        });
    },
});

export const subjectReducer = subjectSlice.reducer;