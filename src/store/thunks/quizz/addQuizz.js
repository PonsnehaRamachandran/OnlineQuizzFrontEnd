import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import baseUrl from '../../../components/baseUrl';

const addQuizz = createAsyncThunk('quizz/add', async (quizz) => {
    const response = await axios.post(`${baseUrl}/api/quizz`,quizz);
    return response.data;
});

export {addQuizz};