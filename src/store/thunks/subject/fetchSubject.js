import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import baseUrl from '../../../components/baseUrl';
const fetchSubject = createAsyncThunk('subject/fetch', async () => {
    const response = await axios.get(`${baseUrl}/api/subjects`);
    // await pause(1000);
    return response.data;
  });
  
// const pause = (duration) => {
//     return new Promise((resolve) => {
//         setTimeout(resolve,duration);
//    });
// };
export {fetchSubject};