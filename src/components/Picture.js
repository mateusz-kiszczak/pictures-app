import addFavoriteIcon from '../icons/favorite.svg';
import removeFavoriteIcon from '../icons/heart_broken.svg';

const Picture = ({ picture, onClickHandler, favorite }) => {
  return (
    <div className="picture" onClick={ onClickHandler }>
      <div className="picture-name">
        <h3>{ picture.name }</h3>
      </div>
      <img className="picture-img" src={ picture.img } alt={ picture.name }></img>
      <div className="picture-favorite-button" role="button" aria-label="add to favorites">
        <p>{ `${favorite ? 'add to' : 'remove from'} favorites`}</p>
        { favorite && 
          <img src={ addFavoriteIcon } alt='heart'></img>
        }
        { !favorite && 
          <img src={ removeFavoriteIcon } alt='broken heart'></img>
        }
      </div>
    </div>
  );
}

export default Picture;
