import { SearchForm } from 'components/SerchForm';
import { useLocation } from 'react-router-dom';

const { Loader } = require('components/Loader');
const { MoviesList } = require('components/MoviesList');
const { fetchSearchMovie } = require('helperApi');
const { useState, useEffect, useRef } = require('react');

export default function Movies() {
  const location = useLocation();
  const [query, setQuery] = useState('');
  const [videoItems, setVideoItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const abortFetch = useRef();

  useEffect(() => {
    if (query === '') {
      return;
    }

    async function getSerchMovie() {
      if (abortFetch.current) {
        abortFetch.current.abort();
      }

      abortFetch.current = new AbortController();

      try {
        setLoading(true);
        const { results } = await fetchSearchMovie(
          query,
          abortFetch.current.signal
        );
        setVideoItems(
          results.map(res => ({
            name: res.title || res.name,
            id: res.id,
          }))
        );
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getSerchMovie();
  }, [query]);

  function onQueryChange(searchQuery) {
    if (searchQuery === query) {
      return;
    }
    setQuery(searchQuery);
  }

  return (
    <>
      <SearchForm onQueryChange={onQueryChange} />
      {loading && <Loader />}

      {videoItems.length > 0 && (
        <MoviesList videoItems={videoItems} locat={location} />
      )}
    </>
  );
}
