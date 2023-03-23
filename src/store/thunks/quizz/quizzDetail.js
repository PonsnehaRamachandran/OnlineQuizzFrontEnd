import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import baseUrl from '../../../components/baseUrl';

const quizzDetail = createAsyncThunk('quizzDetail/fetch', async (id) => {
    const response = await axios.get(`${baseUrl}/api/quizz/${id}`);
    return response.data;
  });
  
  

export {quizzDetail};