import { configureStore } from "@reduxjs/toolkit";
import artifacts from "../components/artifactsList/artifactsSlice";
import characters from "../components/charList/charSlice";
const store = configureStore({
  devTools: process.env.NODE_ENV !== "production",
  reducer: { artifacts, characters },
});
export default store;
