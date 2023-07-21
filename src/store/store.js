import { configureStore } from "@reduxjs/toolkit";
import favToolsSlice from "./favTools-slice";

const store = configureStore({
  reducer: {
    favTools: favToolsSlice.reducer,
  },
});

export default store;
