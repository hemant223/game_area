import {createSlice} from '@reduxjs/toolkit';

export const MemoryGameSlice = createSlice({
  name: 'data_slice',
  initialState: {
    data_slice: [],
    check_data: [],
  },
  reducers: {
    SelectedMemoryGameItem: (state, action) => {

      const existingItemIndex = state.data_slice.findIndex(
        item => item.indexx === action.payload.indexx,
      );
 
      if (existingItemIndex === -1) {
        state.data_slice.push(action.payload);
      } else {

        state.data_slice[existingItemIndex] = action.payload;
      }
    },
    CheckLengthWiseMemoryGameCard: (state, action) => {
       state.check_data=action.payload
    },
  },
});

export const {SelectedMemoryGameItem, CheckLengthWiseMemoryGameCard} =
  MemoryGameSlice.actions;

export default MemoryGameSlice.reducer;
