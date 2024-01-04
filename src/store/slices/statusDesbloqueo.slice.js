/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const statusDesbloqueoSlice = createSlice({
  name: 'opciones',
  initialState: 1,
  reducers: {
    setStatusStore: (state, action) => action.payload,
  },
});

export const { setStatusStore } = statusDesbloqueoSlice.actions;

export default statusDesbloqueoSlice.reducer;
