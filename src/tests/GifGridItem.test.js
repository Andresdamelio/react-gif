import React from 'react';
import { shallow } from 'enzyme';
import GifGridItem from '../components/GifGridItem';

describe('Probando componente <GifGridItem />', () => {
  test('El componente <GifGridItem /> debe de mostrarse correctamente', () => {
    const image = {
      url: 'https://media1.giphy.com/media/l41JU9pUyosHzWyuQ/giphy.gif?cid=9d23b6ac5mxoxi5d87is76lys6chl2gstpg822syzg1jrb8o&rid=giphy.gif&ct=g',
      title: 'Rick And Morty GIF by Adult Swim'
    };
    const wrapper = shallow(<GifGridItem image={image} />);

    expect(wrapper).toMatchSnapshot();
  });
});
