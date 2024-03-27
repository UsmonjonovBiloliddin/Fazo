import { configureStore } from "@reduxjs/toolkit";
import barsSlice from "../Slice/barsSlice";
import authSlice from "../Slice/authSlice";
import laptop from "../Slice/laptop";

const store = configureStore({
  reducer: {
    auth: authSlice,
    bars: barsSlice,
    laptop: laptop,
  },

  devTools: process.env.NODE_ENV !== "production",
});

export default store;
