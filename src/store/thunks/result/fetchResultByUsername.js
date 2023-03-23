import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import baseUrl from '../../../components/baseUrl';
const fetchResultByUsername = createAsyncThunk('ResultByUsername/fetch',
  async (userName) => {
    const response = await axios.get(`${baseUrl}/api/user/${userName}/results`);
    return response.data;
  });


export { fetchResultByUsername };