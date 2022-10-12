import { useState, useEffect } from "react";

import Button from "./Button";
import Spiner from "./Spiner";
import { getPhotos } from "../api/picsum.js";

const ImageList = () => {
  const [isLoading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    getPhotos(page)
      .then((data) => {
        setPhotos((prevValue) => prevValue.concat(data));
        setLoading(false);
      });
  }, [page]);

  const handleClick = () => {
    setLoading(true);
    setPage((prevValue) => ++prevValue);
  }

  return (
    <>
      {isLoading && <Spiner />}
      <div className="photos">
        {photos.map(({ id, download_url: url, author: alt }) => (
          <img key={id} className="photo" src={url} alt={alt} />
        ))}
      </div>
      <Button onClick={handleClick}>Show more</Button>
    </>
  );
};

export default ImageList;