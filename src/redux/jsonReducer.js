// todoSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// 비동기 액션: API에서 할 일 목록 가져오기
export const fetchComments = createAsyncThunk('json/comments', async (arg,thunkApi) => {
  const result = await axios.get('/comments')
  const state = thunkApi.getState();
  console.log('thunkApi',state)
//   const response = await fetch('https://api.example.com/todos');
// console.log(result)
  let result_ = {
    data: result.data,
    auth: state.user.authority
  }
  return result_
});

// Redux 상태 및 리듀서
const jsonSlice = createSlice({
  name: 'json',
  initialState: { loading: false, data: [], errorMessage: '' },
  reducers: {
    // state 
    init: (state, action) => {
      state.loading = false
      // state.data = []
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.loading = false;
        console.log('auth', action.payload.auth)
        state.data = action.payload.data
      })
      .addCase(fetchComments.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = action.error.message;
      });
  }
});

export const { init } = jsonSlice.actions;
export default jsonSlice.reducer;
