import React from "react";

const ArtifactsItem = (props) => {
  return (
    <figure className="artifacts-item">
      <a href={props.name}>
        <img src={props.thumbnail} width="50" height="50" alt={props.name} />
        <figcaption>{props.name}</figcaption>
      </a>
    </figure>
  );
};

export default ArtifactsItem;
