import { createSlice } from "@reduxjs/toolkit";
import { getCampers } from "./operations";

const initialState = {
  items: [],
  favorites: [],
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const campersSlice = createSlice({
  name: "campers",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(getCampers.pending, handlePending)
      .addCase(getCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(getCampers.rejected, handleRejected);
  },
});

export const campersReducer = campersSlice.reducer;
