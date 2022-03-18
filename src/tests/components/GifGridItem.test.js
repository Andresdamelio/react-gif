import React from 'react';
import { shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem';

describe('Probando componente <GifGridItem />', () => {
  const url =
    'https://media1.giphy.com/media/l41JU9pUyosHzWyuQ/giphy.gif?cid=9d23b6ac5mxoxi5d87is76lys6chl2gstpg822syzg1jrb8o&rid=giphy.gif&ct=g';
  const title = 'Rick And Morty GIF by Adult Swim';
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test('El componente <GifGridItem /> debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('El componente <GifGridItem /> Debe de tener un párrafo con el titulo', () => {
    const text = wrapper.find('p').text().trim();
    expect(text).toBe(title);
  });

  test('El componente <GifGridItem /> Debe de tener una imagen', () => {
    const img = wrapper.find('img');
    const { src, alt } = img.props();

    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test('El componente <GifGridItem /> Debe de tener clase animate__fadeIn', () => {
    const div = wrapper.find('div');
    const { className } = div.props();

    expect(className).toContain('animate__fadeIn');
  });
});
