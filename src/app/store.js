import { createStore, combineReducers } from 'redux';

import { allPicturesReducer } from '../features/allPictures/allPicturesSlice';
import { favoritePicturesReducer } from '../features/favoritePictures/favoritePicturesSlice';
import { serachTermReducer } from '../features/searchTerm/searchTermSlice';

export const store = createStore(combineReducers({
  allPictures: allPicturesReducer,
  favoritePictures: favoritePicturesReducer,
  searchTerm: serachTermReducer
}));
