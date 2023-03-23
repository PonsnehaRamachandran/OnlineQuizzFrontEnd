import { configureStore } from '@reduxjs/toolkit';
import { quizzReducer } from './slices/quizzSlice';
import { subjectReducer } from './slices/subjectSlice';
 import { questionReducer } from './slices/questionSlice';
import { resultReducer } from './slices/resultSlice';
export const store = configureStore({
    reducer: {
        subject : subjectReducer,
        quizz : quizzReducer,
         question : questionReducer,
         result : resultReducer
     },
});

export * from './thunks/subject/fetchSubject';
export * from './thunks/subject/addSubject';
export * from './thunks/subject/deleteSubject';
export * from './thunks/quizz/deleteQuizz';
export * from './thunks/quizz/fetchQuizz';
export * from './thunks/quizz/addQuizz';
export * from './thunks/quizz/quizzDetail';
export * from './thunks/question/fetchQuestion';
export * from './thunks/quizz/addQuestion';
export * from './thunks/quizz/deleteQuestion';
export * from './thunks/result/fetchResult';
export * from './thunks/quizz/fetchQuestionbyQuizzId';
export * from './thunks/result/fetchResultByUsername';