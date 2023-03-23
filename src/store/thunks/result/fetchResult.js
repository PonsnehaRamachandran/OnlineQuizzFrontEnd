import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import baseUrl from '../../../components/baseUrl';
const fetchResult = createAsyncThunk('result/fetch', async () => {
    const response = await axios.get(`${baseUrl}/api/results`);
    return response.data;
  });
  

export {fetchResult};