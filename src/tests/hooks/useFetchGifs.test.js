import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas en custom hook useFetchGifs', () => {
  test('Debe de retornar el estado inicial', async () => {
    const category = 'One Punch';
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs(category)
    );
    const { data, loading } = result.current;

    await waitForNextUpdate();
    expect(loading).toBe(true);
    expect(data).toEqual([]);
  });

  test('Debe de retornar un arreglo de imagenes y el loading en false', async () => {
    const category = 'One Punch';
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs(category)
    );
    await waitForNextUpdate();
    const { data, loading } = result.current;

    expect(loading).toBe(false);
    expect(data.length).toBe(10);
  });
});
