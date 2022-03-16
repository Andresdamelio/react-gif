import React from 'react';
import PropTypes from 'prop-types';

const GifGridItem = ({ image }) => {
  return (
    <div className='card'>
      <img src={image.url} alt={image.title} />
      <p className='paragraph'>{image.title}</p>
    </div>
  );
};

GifGridItem.propTypes = {
  image: PropTypes.object.isRequired
};

export default GifGridItem;
