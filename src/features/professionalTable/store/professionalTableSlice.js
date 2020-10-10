import fetchProfessionals from "../api/fetchProfessionals";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getProfessionals = createAsyncThunk(
  "fetchProfessionals",
  async () => fetchProfessionals()
);

const initialState = {
  loading: false,
  error: null,
  data: []
};

const professionalTableSlice = createSlice({
  name: "professionalTable",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProfessionals.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProfessionals.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
    builder.addCase(getProfessionals.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
  },
});

export const selectData = (state) => state.professionalTable.data;

export default professionalTableSlice;
