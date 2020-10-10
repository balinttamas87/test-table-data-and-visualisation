import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from "redux";
import professionalTableSlice from "../features/professionalTable/store/professionalTableSlice";

export default configureStore({
  reducer: combineReducers({
    professionalTable: professionalTableSlice.reducer
  }),
});
