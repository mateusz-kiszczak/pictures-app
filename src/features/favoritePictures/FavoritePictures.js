import { useSelector, useDispatch } from 'react-redux';

import { removePicture, selectFilteredFavoritePictures } from './favoritePicturesSlice';
import Picture from '../../components/Picture';

const FavoritePictures = () => {
  const favoritePictures = useSelector(selectFilteredFavoritePictures);
  const dispatch = useDispatch();

  const onRemovePictureHandler = (picture) => {
    dispatch(removePicture(picture));
  };

  return (
    <div className='picture-wrapper'>
      {favoritePictures.map((picture) => {
        return (
          <Picture 
            onClickHandler={ () => onRemovePictureHandler(picture) }
            picture={ picture }
            favorite={ false }
            key={ `picture_${picture.id}` }
          />
        )
      })}
    </div>
  )
}

export default FavoritePictures;