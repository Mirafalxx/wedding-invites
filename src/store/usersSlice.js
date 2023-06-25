import 'regenerator-runtime/runtime';
import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers, getUser } from '../api/usersApi';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    loading: false,
    user: {},
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

    [getUser.pending]: (state) => {
      state.loading = true;
    },
    [getUser.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.user = payload;
      state.loading = false;
    },
    [getUser.pending]: (state) => {
      state.loading = false;
    },
  },
});

export default usersSlice.reducer;
