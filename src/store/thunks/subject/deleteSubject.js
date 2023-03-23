import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import baseUrl from '../../../components/baseUrl';
const deleteSubject = createAsyncThunk('subject/delete', async (subject) => {
    await axios.delete(`${baseUrl}/api/subject/${subject.subjectId}`);
    return subject;
  });
  

export {deleteSubject};