import { makeAutoObservable, runInAction } from "mobx";
import GenshinService from "../services/genshinService";

class genshinStore {
  characters = [];
  charactersLoadingStatus = "idle";
  artifacts = [];
  artifactsLoadingStatus = "idle";

  genshinService = new GenshinService();
  constructor(
    characters,
    charactersLoadingStatus,
    artifacts,
    artifactsLoadingStatus
  ) {
    makeAutoObservable(this);
    this.characters = characters;
    this.charactersLoadingStatus = charactersLoadingStatus;
    this.artifacts = artifacts;
    this.artifactsLoadingStatus = artifactsLoadingStatus;
  }

  fetchArts() {
    this.artifactsLoadingStatus = "loading";
    this.genshinService
      .getAllArts()
      .then((data) => {
        runInAction(() => {
          this.artifacts = data;
          this.artifactsLoadingStatus = "idle";
        });
      })
      .catch(() => (this.artifactsLoadingStatus = "error"));
  }
  fetchChars() {
    this.charactersLoadingStatus = "loading";
    this.genshinService
      .getAllChars()
      .then((data) => {
        runInAction(() => {
          this.characters = data;
          this.charactersLoadingStatus = "idle";
        });
      })
      .catch(() => (this.charactersLoadingStatus = "error"));
  }
}
export default new genshinStore();
