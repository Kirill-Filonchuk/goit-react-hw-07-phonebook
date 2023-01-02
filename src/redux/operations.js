import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://63b1de4d5e490925c5100793.mockapi.io/contacts';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      // console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contact/addContact',
  async ({ name, phone }, thunkAPI) => {
    try {
      console.log({ name, phone }, '{ name, phone }');
      const response = await axios.post('/contacts', { name, phone });
      console.log(response.data, 'response POST');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contact/delContact',
  async (contactId, thunkAPI) => {
    try {
      console.log(contactId, '<- contactId');
      const response = await axios.delete(`/contacts/${contactId}`);
      console.log(response.data, 'response POST');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
