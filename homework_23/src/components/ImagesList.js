import { useState, useEffect } from "react";

import Button from "./Button.js";
import { getPhotos } from "../api/picsum.js";

const ImageList = () => {
  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    getPhotos(page)
      .then((data) => setPhotos((prevValue) => prevValue.concat(data)));
  }, [page]);

  const handleClick = () => setPage((prevValue) => ++prevValue);

  return (
    <>
      <div className="photos">
        {photos.map(({ id, download_url: url, author: alt }) => (
          <img key={id} className="photo" src={url} alt={`${alt}'s image`} />
        ))}
      </div>
      <Button onClick={handleClick}>Show more</Button>
    </>
  );
};

export default ImageList;