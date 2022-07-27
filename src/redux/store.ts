import { configureStore } from "@reduxjs/toolkit";
import { contactSlice } from "./contactSlice";

export const store = configureStore({
  reducer: {
    contact: contactSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
