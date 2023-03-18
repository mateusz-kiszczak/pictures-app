import { selectSearchTerm } from "../searchTerm/searchTermSlice";

const initialState = [];
export const favoritePicturesReducer = (favoritePictures = initialState, action) => {
  switch (action.type) {
    case 'favoritePictures/addPicture': {
      return [...favoritePictures, action.payload];
    }
    case 'favoritePictures/removePicture': {
      return favoritePictures.filter(picture => picture.id !== action.payload.id);
    }
    default: {
      return favoritePictures;
    }
  }
}

export const addPicture = (picture) => {
  return {
    type: 'favoritePictures/addPicture',
    payload: picture
  }
};

export const removePicture = (picture) => {
  return {
    type: 'favoritePictures/removePicture',
    payload: picture
  }
};

export const selectFavoritePictures = (state) => {
  return state.favoritePictures;
};

export const selectFilteredFavoritePictures = (state) => {
  const favoritePictures = selectFavoritePictures(state);
  const searchTerm = selectSearchTerm(state);

  return favoritePictures.filter(picture => picture.name.toLowerCase().includes(searchTerm.toLowerCase()));
};
