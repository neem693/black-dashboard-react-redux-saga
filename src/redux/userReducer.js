// todoSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// Redux 상태 및 리듀서
const userSlice = createSlice({
  name: 'user',
  initialState: { authority: '', name: '' },
  reducers: {
    // state 
    initUser: (state, action) => {
      state.authority = 'admin'
      state.name='someone'
      // state.data = []
    },
  },
  extraReducers: (builder) => {
  }
});

export const { initUser } = userSlice.actions;
export default userSlice.reducer;
