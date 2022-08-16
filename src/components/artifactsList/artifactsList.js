import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Spinner from "../spinner/spinner";
import "./artifactsList.scss";
import ArtifactsItem from "../artifactsItem/artifactsItem";
import { observer } from "mobx-react-lite";
import genshinStore from "../../store/mobx";

const ArtifactsList = observer(() => {
  useEffect(() => {
    genshinStore.fetchArts();
  }, []);

  const renderCharacters = (arr) => {
		if (arr){

			if (arr && arr.length === 0) {
				return <Spinner />;
			}
			
			if (genshinStore.artifactsLoadingStatus === "error") {
				return <h2>Ошибка при загрузке</h2>;
			}
			
			return arr.map((char) => {
				return (
					<ArtifactsItem
          key={uuidv4()}
          thumbnail={char.thumbnail}
          name={char.name}
					/>
					);
				});
			}
  };

  const elements = renderCharacters(genshinStore.artifacts);

  return (
    <>
      <h1>Артефакты</h1>
      <section className="artifacts-list">{elements}</section>
    </>
  );
});

export default ArtifactsList;
