import React from 'react';
import { shallow } from 'enzyme';
import GifGrid from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('Probando el comportamiento del componente <GifGrid />', () => {
  const category = 'One Punch';

  test('Probando que el componente <GifGrid /> se renderiza de forma correcta', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true
    });
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe de mostrar items cuando se cargan images con useFetchGifs', () => {
    const images = [
      {
        id: 'tJqyalvo9ahykfykAj',
        title: 'rick and morty middle finger GIF',
        url: 'https://media3.giphy.com/media/tJqyalvo9ahykfykAj/giphy.gif?cid=9d23b6ackteuvlgot4bz3fzckqfmb92abkdqiu998sj4im8s&rid=giphy.gif&ct=g'
      },
      {
        id: 'cOKjNdJDbqNCm4n0Jm',
        title: 'Happy Season 1 GIF by Rick and Morty',
        url: 'https://media2.giphy.com/media/cOKjNdJDbqNCm4n0Jm/giphy.gif?cid=9d23b6ackteuvlgot4bz3fzckqfmb92abkdqiu998sj4im8s&rid=giphy.gif&ct=g'
      },
      {
        id: 'gk3R16JhLP8RUka2nD',
        title: 'Count Me In Rick And Morty GIF',
        url: 'https://media3.giphy.com/media/gk3R16JhLP8RUka2nD/giphy.gif?cid=9d23b6ackteuvlgot4bz3fzckqfmb92abkdqiu998sj4im8s&rid=giphy.gif&ct=g'
      },
      {
        id: '3Fdskc7J0timI',
        title: 'rick and morty GIF by Adult Swim',
        url: 'https://media4.giphy.com/media/3Fdskc7J0timI/giphy.gif?cid=9d23b6ackteuvlgot4bz3fzckqfmb92abkdqiu998sj4im8s&rid=giphy.gif&ct=g'
      },
      {
        id: 'l378BzHA5FwWFXVSg',
        title: 'Scared Rick And Morty GIF by Adult Swim',
        url: 'https://media1.giphy.com/media/l378BzHA5FwWFXVSg/giphy.gif?cid=9d23b6ackteuvlgot4bz3fzckqfmb92abkdqiu998sj4im8s&rid=giphy.gif&ct=g'
      }
    ];
    useFetchGifs.mockReturnValue({
      data: images,
      loading: false
    });
    const wrapper = shallow(<GifGrid category={category} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.paragraph').exists()).toBe(false);
    expect(wrapper.find('GifGridItem').length).toBe(images.length);
  });
});
