import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import baseUrl from '../../../components/baseUrl';

const addSubject = createAsyncThunk('subject/add', async (subject) => {
    const response = await axios.post(`${baseUrl}/api/subject`,subject);
    return response.data;
});

export {addSubject};