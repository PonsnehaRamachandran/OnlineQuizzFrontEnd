import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import baseUrl from '../../../components/baseUrl';
const fetchQuizz = createAsyncThunk('quizz/fetch', async () => {
    const response = await axios.get(`${baseUrl}/api/quizz`);
    return response.data;
  });
  

export {fetchQuizz};