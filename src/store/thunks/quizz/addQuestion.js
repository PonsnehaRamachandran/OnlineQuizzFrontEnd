import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import baseUrl from '../../../components/baseUrl';

const addQuestion = createAsyncThunk('question/add', async (question) => {
    const response = await axios.post(`${baseUrl}/api/questions`,question);
    return response.data;
});

export {addQuestion};