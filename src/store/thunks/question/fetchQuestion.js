import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import baseUrl from '../../../components/baseUrl';
const fetchQuestion = createAsyncThunk('question/fetch', async () => {
    const response = await axios.get(`${baseUrl}/api/questions`);
    return response.data;
  });
  

export {fetchQuestion};