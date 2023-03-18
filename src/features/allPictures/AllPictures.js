import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addPicture } from '../favoritePictures/favoritePicturesSlice';
import { loadData, selectFilteredAllPictures } from './allPicturesSlice';
import Picture from '../../components/Picture';

const AllPictures = () => {
  const allPictures = useSelector(selectFilteredAllPictures);
  const dispatch = useDispatch();

  const onFirstRender = () => {
    dispatch(loadData());
  }

  useEffect(onFirstRender, [dispatch]);

  const onAddPictureHandler = (picture) => {
    dispatch(addPicture(picture));
  };
  
  return (
    <div className='picture-wrapper'>
      {allPictures.map((picture) => {
        return (
          <Picture 
            onClickHandler={ () => onAddPictureHandler(picture) }
            picture={ picture }
            favorite={ true }
            key={ `picture_${picture.id}` }
          />
        )
      })}
    </div>
  )
}

export default AllPictures;
