import { createSlice } from '@reduxjs/toolkit';
import { fetchQuizz } from '../thunks/quizz/fetchQuizz';
import { addQuizz } from '../thunks/quizz/addQuizz';
import { deleteQuizz } from '../thunks/quizz/deleteQuizz';
 import { quizzDetail } from '../thunks/quizz/quizzDetail';

const quizzSlice = createSlice({
    name : "quizz" ,
    initialState : {
        data : [],
        isLoading : false,
        error : null ,
    },
    extraReducers(builder){

        /////////fetchQuizz//////
        builder.addCase(fetchQuizz.pending, (state,action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchQuizz.fulfilled, (state,action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchQuizz.rejected, (state,action) => {
            state.isLoading = false;
            state.error = action.error;
        });


         /////////////add Quizz///////
         builder.addCase(addQuizz.pending, (state,action) => {
            state.isLoading = true;
        });
        builder.addCase(addQuizz.fulfilled, (state,action) => {
            state.isLoading = false;
            state.data.push(action.payload);
        });
        builder.addCase(addQuizz.rejected, (state,action) => {
            state.isLoading = false;
            state.error = action.error;
        });

        //  /////////////delete Quizz///////
         builder.addCase(deleteQuizz.pending, (state,action) => {
            state.isLoading = true;
        });
        builder.addCase(deleteQuizz.fulfilled, (state,action) => {
            state.isLoading = false;
            state.data = state.data.filter(quizz => {
                return quizz.id !== action.payload.id
            });
        });
        builder.addCase(deleteQuizz.rejected, (state,action) => {
            state.isLoading = false;
            state.error = action.error;
        });

        //   ///////////// QuizzDetailbyId///////
          builder.addCase(quizzDetail.pending, (state,action) => {
            state.isLoading = true;
        });
        builder.addCase(quizzDetail.fulfilled, (state,action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(quizzDetail.rejected, (state,action) => {
            state.isLoading = false;
            state.error = action.error;
        });

       
    }
});

export const quizzReducer = quizzSlice.reducer;