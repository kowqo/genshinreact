import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import GenshinService from "../../services/genshinService";

const initialState = {
  characters: [],
  charactersLoadingStatus: "idle",
};
const genshinService = new GenshinService();

export const fetchCharacters = createAsyncThunk(
  "characters/fetchCharacters",
  () => {
    return genshinService.getAllCharacters();
  }
);

const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.charactersLoadingStatus = "loading";
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.charactersLoadingStatus = "idle";
        state.characters = action.payload;
      })
      .addCase(fetchCharacters.rejected, (state) => {
        state.charactersLoadingStatus = "error";
      })
      .addDefaultCase(() => {});
  },
});
const { actions, reducer } = charactersSlice;

export default reducer;
export const { charactersFetching, charactersFetchingError, charactersLoaded } =
  actions;
