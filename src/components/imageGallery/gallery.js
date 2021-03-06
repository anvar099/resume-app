import React from "react";
import Gallery from "react-image-gallery";

import "react-image-gallery/styles/css/image-gallery.css";
import "./gallery.css";

const ImageGalery = (props) => {
  const imageList = props?.image?.map((image) => {
    return {
      original: image,
      thumbnail: image,
    };
  });
  return (
    <div>
      <Gallery items={imageList} showBullets showThumbnails={false} />
    </div>
  );
};

export default ImageGalery;
