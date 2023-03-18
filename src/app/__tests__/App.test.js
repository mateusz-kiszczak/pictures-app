import { render, screen } from '@testing-library/react';
import App from '../App';
import { store } from '../store';
import { Provider } from 'react-redux';
import { loadData } from '../../features/allPictures/allPicturesSlice';

test('renders the landing page', () => {
  render(<Provider store={store}><App /></Provider>);

  expect(screen.getByRole('heading', {level: 1})).toHaveTextContent(/picture app/);
  expect(screen.getAllByRole('heading', {level: 2})).toHaveLength(2);
  expect(screen.getByPlaceholderText('Search picture'));
});

test('filter pictures by adding specific letter (t)', () => {
  // arrange
  const inputObject = store.dispatch(loadData()).payload;
  const expectedValue = ['Desert', 'Architecture'];
  //act
  const actualValue = inputObject.filter((picture) => picture.name.toLowerCase().includes('t')).map(item => item.name);
  //assertion
  expect(actualValue).toEqual(expectedValue);
  expect(actualValue).not.toContain('Window');
});
