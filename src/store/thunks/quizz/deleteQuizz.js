import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import baseUrl from '../../../components/baseUrl';
const deleteQuizz = createAsyncThunk('quizz/delete', async (quizz) => {
    await axios.delete(`${baseUrl}/api/quizz/${quizz.id}`);
    return quizz;
  });
  

export {deleteQuizz};