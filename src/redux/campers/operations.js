import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCampers, firstFetch } from "../../services/apiCampers";

export const getCampers = createAsyncThunk(
  "campers/getAll",
  async (_, thunkAPI) => {
    try {
      const response = await firstFetch();
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const loadMoreCampers = createAsyncThunk(
  "campers/getMore",
  async (_, thunkAPI) => {
    try {
      const response = await fetchCampers(thunkAPI.getState().campers.page);
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
