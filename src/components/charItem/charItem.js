import React from 'react'

const CharItem = (props) => {
	return (
    <figure className="character-item">
      <a href={props.name}>
        <img
          src={props.thumbnail}
          width="50"
          height="50"
          alt={props.name}
        />
        <figcaption className="character-item-text">{props.name}</figcaption>
      </a>
    </figure>
  );
}

export default CharItem
