import 'regenerator-runtime/runtime';
import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from '../api/usersApi';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [fetchUsers.pending]: (state) => {
      state.loading = true;
    },
    [fetchUsers.fulfilled]: (state, { payload }) => {
      state.users = payload;
      state.loading = false;
    },
    [fetchUsers.pending]: (state) => {
      state.loading = false;
    },
  },
});

export default usersSlice.reducer;
