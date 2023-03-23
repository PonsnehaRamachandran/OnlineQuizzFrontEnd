import { createSlice } from '@reduxjs/toolkit';
import { fetchQuestion } from '../thunks/question/fetchQuestion';
import { addQuestion } from '../thunks/quizz/addQuestion';
import { deleteQuestion } from '../thunks/quizz/deleteQuestion';
import { fetchQuestionbyQuizzId } from '../thunks/quizz/fetchQuestionbyQuizzId';
const questionSlice = createSlice({
    name: "question",
    initialState: {
        data: [],
        isLoading: false,
        error: null,
    },
    extraReducers(builder) {

        /////////fetchQuestion//////
        builder.addCase(fetchQuestion.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchQuestion.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchQuestion.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });

        //////fetch question by quizzid//////////////
        builder.addCase(fetchQuestionbyQuizzId.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.data = action.payload;
        })

        /////////////add Question///////
        builder.addCase(addQuestion.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(addQuestion.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data.push(action.payload);
        });
        builder.addCase(addQuestion.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });

        /////////////delete Question///////
        builder.addCase(deleteQuestion.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(deleteQuestion.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = state.data.filter(question => {
                return question.id !== action.payload.id
            });
        });
        builder.addCase(deleteQuestion.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });

       
    }
});


export const questionReducer = questionSlice.reducer;