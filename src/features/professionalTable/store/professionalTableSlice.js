import fetchProfessionals from "../api/fetchProfessionals";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getProfessionals = createAsyncThunk(
  "fetchProfessionals",
  async () => fetchProfessionals()
);

const initialState = {
  loading: false,
  error: null,
  data: [],
  page: 1,
  perPage: 5
};

const professionalTableSlice = createSlice({
  name: "professionalTable",
  initialState,
  reducers: {
    setPage(state, action) {
      state.page = action.payload;
    },
    setPerPage(state, action) {
      state.perPage = action.payload;
    },
  },
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
export const selectPage = (state) => state.professionalTable.page;
export const selectPerPage = (state) => state.professionalTable.perPage;

export const { setPage, setPerPage } = professionalTableSlice.actions;

export default professionalTableSlice;
