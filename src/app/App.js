import AllPictures from '../features/allPictures/AllPictures';
import SearchTerm from '../features/searchTerm/SearchTerm';
import FavoritePictures from '../features/favoritePictures/FavoritePictures';

const App = () => {
  return (
    <main className='app'>
      <h1>picture app</h1>
      <section>
        <h2 style={{ display: 'none' }}>search tool</h2>
        <SearchTerm />
      </section>
      <section>
        <h2>favorite pictures</h2>
        <FavoritePictures />
      </section>
      <section>
        <h2>all pictures</h2>
        <AllPictures />
      </section>
    </main>
  );
}

export default App;
