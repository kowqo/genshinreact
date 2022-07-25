import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import artifacts from "../components/artifactsList/artifactsSlice";
import characters from "../components/charList/charSlice";
const middleware = getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false,
  thunk: true,
});
const store = configureStore({
  devTools: process.env.NODE_ENV !== "production",
  reducer: { artifacts, characters },
  middleware,
});
export default store;
