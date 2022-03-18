import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';
const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className='title'>{category}</h3>
      {loading && <p className='paragraph'>cargando...</p>}
      <div className='gifs'>
        {React.Children.toArray(
          images.map((image) => (
            <GifGridItem title={image.title} url={image.url} />
          ))
        )}
      </div>
    </>
  );
};

export default GifGrid;
