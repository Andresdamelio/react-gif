import React, { useState, useEffect } from 'react';
import GifGridItem from './GifGridItem';
import { getGifs } from '../helpers/getGifs';
const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs(category).then((images) => setImages(images));
  }, [category]);

  return (
    <>
      <h3 className='title'>{category}</h3>
      <div className='gifs'>
        {React.Children.toArray(
          images.map((image) => <GifGridItem image={image} />)
        )}
      </div>
    </>
  );
};

export default GifGrid;
