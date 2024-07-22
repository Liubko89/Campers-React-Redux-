import { createSlice } from "@reduxjs/toolkit";
import { getCampers, loadMoreCampers } from "./operations";

const initialState = {
  items: [],
  filter: null,
  favorites: [],
  page: 1,
  isLoading: false,
  error: null,
  full: false,
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
    filter: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCampers.pending, handlePending)
      .addCase(getCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(getCampers.rejected, handleRejected)

      .addCase(loadMoreCampers.pending, handlePending)
      .addCase(loadMoreCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        if (action.payload.length < 4) state.full = true;
        state.items.push(...action.payload);
      })
      .addCase(loadMoreCampers.rejected, handleRejected);
  },
});

export const { increment, favorite, filter } = campersSlice.actions;

export const campersReducer = campersSlice.reducer;
