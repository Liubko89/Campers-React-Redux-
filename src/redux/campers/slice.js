import { createSlice } from "@reduxjs/toolkit";
import { getCampers } from "./operations";

const initialState = {
  items: [],
  favorites: [],
  page: 1,
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
  reducers: {
    increment: (state) => {
      state.page += 1;
    },
    favorite: (state, { payload }) => {
      const index = state.favorites.findIndex((el) => el.id === payload);
      index === -1
        ? state.favorites.push(state.items.find((el) => el.id === payload))
        : state.favorites.splice(index, 1);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCampers.pending, handlePending)
      .addCase(getCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(...action.payload);
      })
      .addCase(getCampers.rejected, handleRejected);
  },
});

export const { increment, favorite } = campersSlice.actions;

export const campersReducer = campersSlice.reducer;
