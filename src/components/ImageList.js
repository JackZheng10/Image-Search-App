import React from "react";

const ImageList = props => {
  const processedImages = props.images.map(({ description, id, urls }) => {
    return <img alt={description} key={id} src={urls.regular} />;
  });

  return <div>{processedImages}</div>;
};

export default ImageList;
