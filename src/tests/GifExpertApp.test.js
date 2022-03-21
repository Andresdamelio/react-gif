import React from 'react';
import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';

describe('Probando el funcionamiento de <GifExpertApp />', () => {
  test('Probando que <GifExpertApp /> se renderiza correctamente', () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test('<GifExpertApp /> debe de mostrar una lista de categorias correctamente', () => {
    const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('GifGrid').length).toBe(categories.length);
  });
});
