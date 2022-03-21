import './index.css';
import 'animate.css';

import React from 'react';
import ReactDOM from 'react-dom';

import GifExpertApp from './GifExpertApp';

ReactDOM.render(
  <GifExpertApp defaultCategories={['Rick and morty']} />,
  document.getElementById('root')
);
