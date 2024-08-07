import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentPage: 1
};

const paginationSlice = createSlice({
    name: 'pagination',
    initialState: initialState,
  
    // actions
    reducers: {
        setCurrentPage(state, action) {
        state.currentPage = action.payload
      }
    }
  });
  
  // export const!
  export const { setCurrentPage } = paginationSlice.actions;
  export default paginationSlice.reducer;