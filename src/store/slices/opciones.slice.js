/* eslint-disable no-console */
/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const opcionesSlice = createSlice({
  name: 'opciones',
  initialState: [],
  reducers: {
    setOpcionesGlobal: (state, action) => {
      console.log(state);
      console.log(action);
      const index = state?.findIndex((e) => e.id === action.payload.id);
      console.log(index);
      if (index === -1) {
        state?.push(action.payload);
      } else {
        // eslint-disable-next-line no-param-reassign
        state[index] = action.payload;
      }
    },
    setOpcionesStore: (state, action) => action.payload,
  },
});

export const { setOpcionesGlobal } = opcionesSlice.actions;
export const { setOpcionesStore } = opcionesSlice.actions;
export default opcionesSlice.reducer;
