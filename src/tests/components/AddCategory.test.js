import React from 'react';
import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';

describe('Probando componente <AddCategory />', () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test('Comprobando que el componente <AddCategory /> se renderiza de forma correcta', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Comprobando que evento en input de texto en  componente <AddCategory />', () => {
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: 'Samurai' } });

    expect(wrapper.find('input').prop('value')).toBe('Samurai');
  });

  test('Mostrar validación si se ingresan menos de dos caracteres', () => {
    const form = wrapper.find('form');
    form.simulate('submit', { preventDefault: () => {} });
    const span = wrapper.find('span').text();

    expect(setCategories).not.toHaveBeenCalled();
    expect(span).toBe('Debes ingresar al menos dos caracteres');
  });

  test('Debe de llamar al setCategories y limpiar el input', () => {
    // 1. Simular cambio en input
    wrapper.find('input').simulate('change', { target: { value: 'Samurai' } });

    // 2. Simular submit
    wrapper.find('form').simulate('submit', { preventDefault: () => {} });

    // 3. Comprobar que se llama al setCategories
    expect(setCategories).toHaveBeenCalled();
    // Verificar que setCategories haya recibido una funcion
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

    // 4. Comprobar que el input está vacío
    expect(wrapper.find('input').prop('value')).toBe('');
  });
});
