import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  loggedIn: false,
  error: null,
  list: [],
  filter: [],
  filterpraduct:false,
};

const laptopService = createSlice({
  name: "laptop",
  initialState,
  reducers: {
    laptopStart: (state) => {
      state.isLoading = true;
    },
    laptopSuccess: (state, actions) => {
      state.isLoading = false;
      state.list = actions.payload;
      state.error = null;
    },
    laptopError: (state, actions) => {
      state.isLoading = false;
      state.error = actions.payload;
    },
    praductFilter: (state, actions) => {
      state.isLoading = false;
      state.filter = actions.payload;
    },
    Filterpraduct: (state) => {
      state.filterpraduct = !state.filterpraduct
    },
  },
});

export const { laptopStart, laptopSuccess, laptopError, praductFilter ,Filterpraduct} =
  laptopService.actions;

export default laptopService.reducer;
