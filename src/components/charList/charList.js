import React, { useEffect, useState } from "react";
import CharItem from "../charItem/charItem";
import Spinner from "../spinner/spinner";
import "./charList.scss";
import { v4 as uuidv4 } from "uuid";
import genshinStore from "../../store/mobx";
import { observer } from "mobx-react-lite";

const CharList = observer(() => {
  const [activeFilter, setActiveFilter] = useState("all");

  const onActiveFilterChanged = (event) => {
    setActiveFilter(event.target.value);
  };

  useEffect(() => {
    genshinStore.fetchChars();
  }, []);

  const renderCharacters = (arr) => {
    if (arr) {
      if (arr.length === 0) {
        return <Spinner />;
      }
      if (genshinStore.charactersLoadingStatus === "error") {
        return <h2>Ошибка при загрузке</h2>;
      }

      return arr.map((char) => {
        return (
          <CharItem
            key={uuidv4()}
            vision={char.vision}
            thumbnail={char.thumbnail}
            name={char.name}
          />
        );
      });
    }
  };
  const filteredElements = (arr) => {
		if(arr){

			return renderCharacters(
				arr.filter((char) => {
					if (activeFilter === "all") return char;
					return char.vision.toLowerCase() === activeFilter.toLowerCase();
				})
				);
			}
  };
  const elements = filteredElements(genshinStore.characters);
	
  return (
    <>
      <h1>Список персонажей</h1>
      <select
        onChange={(event) => onActiveFilterChanged(event)}
        className="element"
      >
        <option value="all">all</option>
        <option value="anemo">anemo</option>
        <option value="pyro">pyro</option>
        <option value="hydro">hydro</option>
        <option value="electro">electro</option>
        <option value="cryo">cryo</option>
        <option value="geo">geo</option>
      </select>
      <section className="character-list">{elements}</section>
    </>
  );
});

export default CharList;
