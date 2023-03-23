import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import baseUrl from '../../../components/baseUrl';
const deleteQuestion = createAsyncThunk('question/delete', async (question) => {
    await axios.delete(`${baseUrl}/questions/${question.questionId}`);
    return question;
  });
  

export {deleteQuestion};