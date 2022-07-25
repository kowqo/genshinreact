import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import GenshinService from "../../services/genshinService";

const initialState = {
  artifacts: [],
  artifactsLoadingStatus: "idle",
};
const genshinService = new GenshinService();

export const fetchArtifacts = createAsyncThunk(
  "artifacts/fetchArtifacts",
  () => {
    return genshinService.getAllArts();
  }
);

const artifactsSlice = createSlice({
  name: "artifacts",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArtifacts.pending, (state) => {
        state.artifactsLoadingStatus = "loading";
      })
      .addCase(fetchArtifacts.fulfilled, (state, action) => {
        state.artifactsLoadingStatus = "idle";
        state.artifacts = action.payload;
      })
      .addCase(fetchArtifacts.rejected, (state) => {
        state.artifactsLoadingStatus = "error";
      })
      .addDefaultCase(() => {});
  },
});

const { actions, reducer } = artifactsSlice;

export default reducer;
export const { artifactsFetching, artifactsFetchingError, artifactsLoaded } =
  actions;
