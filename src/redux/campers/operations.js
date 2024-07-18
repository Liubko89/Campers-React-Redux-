import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCampers } from "../../services/apiCampers";

export const getCampers = createAsyncThunk(
  "campers/getAll",
  async (_, thunkAPI) => {
    try {
      const response = await fetchCampers(thunkAPI.getState().campers.page);
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
