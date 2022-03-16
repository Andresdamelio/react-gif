import React, { useState } from 'react';
import './index.css';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';
import { v4 as uuidv4 } from 'uuid';
const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch']);

  return (
    <>
      <h1 className='title'>Gif Expert App</h1>
      <AddCategory setCategories={setCategories} />
      <hr />

      {categories.map((category) => {
        return <GifGrid key={uuidv4()} category={category} />;
      })}
    </>
  );
};

export default GifExpertApp;
