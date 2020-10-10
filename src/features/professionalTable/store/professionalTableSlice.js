import fetchProfessionals from "../api/fetchProfessionals";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const getProfessionals = createAsyncThunk(
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
  extraReducers: {
    [getProfessionals.pending](state) {
      state.loading = true;
    },
    [getProfessionals.rejected](state, action) {
      state.loading = false;
      state.error = action.error;
    },
    [getProfessionals.fulfilled](state, action) {
      state.loading = false;
      state.data = action.payload;
    }
  }
});

// selectors
export const selectData = (state) => state.professionalTable.data;
export const selectPage = (state) => state.professionalTable.page;
export const selectPerPage = (state) => state.professionalTable.perPage;

// actions
export const { setPage, setPerPage } = professionalTableSlice.actions;

// thunks
export { getProfessionals };

// reducer
export default professionalTableSlice;
