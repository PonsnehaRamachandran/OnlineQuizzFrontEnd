import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import baseUrl from '../../../components/baseUrl';
const fetchQuestionbyQuizzId = createAsyncThunk('questionbyQuizz/fetch', async (id) => {
    const response = await axios.get(`${baseUrl}/api/quizz/${id}/questions`);
    return response.data;
  });
  

export {fetchQuestionbyQuizzId};