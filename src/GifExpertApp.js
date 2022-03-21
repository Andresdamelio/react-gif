import React, { useState } from 'react';
import './index.css';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';
import { v4 as uuidv4 } from 'uuid';
const GifExpertApp = ({ defaultCategories = [] }) => {
  const [categories, setCategories] = useState(defaultCategories);
  // const [categories, setCategories] = useState(['Rick and morty']);

  return (
    <>
      <h1 className='title animate__animated animate__fadeIn'>
        Gif Expert App
      </h1>
      <AddCategory setCategories={setCategories} />
      <hr />

      {categories.map((category) => {
        return <GifGrid key={uuidv4()} category={category} />;
      })}
    </>
  );
};

export default GifExpertApp;
