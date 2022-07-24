import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArtifacts } from "./artifactsSlice";

import Spinner from "../spinner/spinner";
import "./artifactsList.scss";
import ArtifactsItem from "../artifactsItem/artifactsItem";
const ArtifactsList = () => {
  const { artifacts, artifactsLoadingStatus } = useSelector(
    (state) => state.artifacts
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchArtifacts());
  }, []);
  const renderCharacters = (arr) => {
    if (arr.length === 0) {
      return <Spinner />;
    }
    if (artifactsLoadingStatus === "error") {
      return <h2>Ошибка при загрузке</h2>;
    }
    return arr.map((char, index) => {
      return (
        <ArtifactsItem
          key={char.name}
          thumbnail={char.thumbnail}
          name={char.name}
        />
      );
    });
  };
  const elements = renderCharacters(artifacts);
  return (
    <>
      <h1>Артефакты</h1>
      <section className="artifacts-list">{elements}</section>
    </>
  );
};

export default ArtifactsList;
