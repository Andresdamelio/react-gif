import React, { useState } from 'react';
import './index.css';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';
import { v4 as uuidv4 } from 'uuid';
const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch']);

  return (
    <>
      {JSON.stringify(categories)}
      <h2>Gif Expert App</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      {categories.map((category) => {
        return <GifGrid key={uuidv4()} category={category} />;
      })}
    </>
  );
};

export default GifExpertApp;
