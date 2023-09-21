import {configureStore} from '@reduxjs/toolkit';
import MemoryGameSlice from './slices/MemoryGameSlice';

export default configureStore({
  reducer: {
    MemoryGameReducer: MemoryGameSlice,
 
  },
});
