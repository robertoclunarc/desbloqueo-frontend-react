import { configureStore } from '@reduxjs/toolkit';
import opciones from './slices/opciones.slice';
import status from './slices/statusDesbloqueo.slice';

export default configureStore({
  reducer: {
    opciones,
    status,
  },
});
