import allPicturesData from "../../data";
import { selectSearchTerm } from "../searchTerm/searchTermSlice";

export const loadData = () => {
  return {
    type: 'allPictures/loadData',
    payload: allPicturesData
  }
}

const initialState = [];

export const allPicturesReducer = (allPictures = initialState, action) => {
  switch (action.type) {
    case 'allPictures/loadData': {
      return action.payload;
    }
    case 'favoritePictures/addPicture': {
      return allPictures.filter(picture => picture.id !== action.payload.id);
    }
    case 'favoritePictures/removePicture': {
      return [...allPictures, action.payload];
    }
    default: {
      return allPictures;
    }
  }
};

export const selectAllPictures = (state) => state.allPictures;

export const selectFilteredAllPictures = (state) => {
  const allPictures = selectAllPictures(state);
  const searchTerm = selectSearchTerm(state);

  return allPictures.filter((picture) => picture.name.toLowerCase().includes(searchTerm.toLowerCase()));
};
