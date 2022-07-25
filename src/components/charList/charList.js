import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharacters } from "./charSlice";
import CharItem from "../charItem/charItem";
import Spinner from "../spinner/spinner";
import "./charList.scss";
import { v4 as uuidv4 } from "uuid";
const CharList = () => {
  const { characters, charactersLoadingStatus } = useSelector(
    (state) => state.characters
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  const renderCharacters = (arr) => {
    if (arr.length === 0) {
      return <Spinner />;
    }
    if (charactersLoadingStatus === "error") {
      return <h2>Ошибка при загрузке</h2>;
    }

    return arr.map((char, i) => {
      return (
        <CharItem key={uuidv4()} thumbnail={char.thumbnail} name={char.name} />
      );
    });
  };
  const elements = renderCharacters(characters);
  return (
    <>
      <h1>Список персонажей</h1>
      <select className="element">
        <option value="all">all</option>
        <option value="anemo">anemo</option>
        <option value="fire">fire</option>
        <option value="water">water</option>
        <option value="electro">electro</option>
        <option value="cryo">cryo</option>
        <option value="geo">geo</option>
      </select>
      <section className="character-list">{elements}</section>
    </>
  );
};

export default CharList;
