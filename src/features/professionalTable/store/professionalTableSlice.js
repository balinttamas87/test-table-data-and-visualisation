import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fetchProfessionals from "../api/fetchProfessionals";
import transformProfessionals from "../helpers/transformProfessionals";

const sortValues = (valueA, valueB, sortOrder) => {
  const isDescending = sortOrder === "desc";

  if (valueA < valueB) {
    return isDescending ? 1 : -1;
  }
  if (valueA > valueB) {
    return isDescending ? -1 : 1;
  }

  return 0;
}

const sortFunctions = {
  date: (field, sortOrder) => (a, b) => {
    const [dayA, monthA, yearA] = a[field].split("/");
    const [dayB, monthB, yearB] = b[field].split("/");
    const valueA = new Date(yearA, monthA, dayA).getTime();
    const valueB = new Date(yearB, monthB, dayB).getTime();

    return sortValues(valueA, valueB, sortOrder);
  },
  string: (field, sortOrder) => (a, b) => {
    const valueA = !a[field] ? "" : a[field].toLowerCase();
    const valueB = !b[field] ? "" : b[field].toLowerCase();

    return sortValues(valueA, valueB, sortOrder);
  },
  number: (field, sortOrder) => (a, b) => {
    const valueA = Number(a[field]);
    const valueB = Number(b[field]);

    return sortValues(valueA, valueB, sortOrder);
  }
}

const sortTypeMap = {
  dateOfBirth: "date",
  industry: "string",
  salary: "number",
}

const getProfessionals = createAsyncThunk(
  "fetchProfessionals",
  async () => fetchProfessionals()
);

export const initialState = {
  loading: false,
  error: null,
  professionals: [],
  page: 1,
  perPage: 5,
  sortOrder: "desc"
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
    sortBy(state, action) {
      const sortType = sortTypeMap[action.payload.field];
      if (!sortType) return state;

      const sortCallback = sortFunctions[sortType];
      state.professionals = state.professionals.sort(sortCallback(action.payload.field, state.sortOrder));
      state.sortOrder = state.sortOrder === "desc" ? "asc" : "desc";
    }
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
      state.professionals = transformProfessionals(action.payload);
    }
  }
});

// selectors
export const selectProfessionals = (state) => state.professionalTable.professionals;
export const selectPage = (state) => state.professionalTable.page;
export const selectPerPage = (state) => state.professionalTable.perPage;

// actions
export const { setPage, setPerPage, sortBy } = professionalTableSlice.actions;

// thunks
export { getProfessionals };

// reducer
export default professionalTableSlice;
