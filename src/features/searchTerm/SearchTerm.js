import { useSelector, useDispatch } from 'react-redux';

import { setSearchTerm, clearSearchTerm, selectSearchTerm } from './searchTermSlice';

import searchIcon from '../../icons/search.svg';
import clearIcon from '../../icons/close.svg';

const SearchTerm = () => {
  const searchTerm = useSelector(selectSearchTerm);
  const dispatch = useDispatch();

  const onSearchTermChangeHandler = (event) => {
    const userInput = event.target.value;
    dispatch(setSearchTerm(userInput));
  };

  const onClearSearchTermHandler = () => {
    dispatch(clearSearchTerm());
  };

  return (
    <div className='search'>
      <img className='search-icon' src={searchIcon} alt='search'></img>
      <input
        className='search-input'
        type='text'
        value={ searchTerm }
        onChange={ onSearchTermChangeHandler }
        placeholder='Search picture'
      ></input>
      { (searchTerm && searchTerm.length > 0) && 
        <img 
          role="button"
          onClick={ onClearSearchTermHandler }
          className="search-clear-button" 
          src={clearIcon} 
          alt='clear'>
        </img>
      }
    </div>
  )
}

export default SearchTerm;
