import { Loader } from 'components/Loader';
import { MoviesList } from 'components/MoviesList';
import { fetchAllVideo } from 'helperApi';
import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const [videoItems, setVideoItems] = useState();
  const [loading, setLoading] = useState(false);
  const abortFetch = useRef();

  useEffect(() => {
    async function getAllVideo() {
      if (abortFetch.current) {
        abortFetch.current.abort();
      }
      abortFetch.current = new AbortController();

      try {
        setLoading(true);
        const { results } = await fetchAllVideo(abortFetch.current.signal);
        setVideoItems(
          results.map(res => ({
            name: res.title || res.name,
            id: res.id,
          }))
        );
      } catch (error) {
      } finally {
        setLoading(false);
      }
    }
    getAllVideo();
  }, []);

  return (
    <>
      {loading && <Loader />}
      {videoItems && <MoviesList videoItems={videoItems}></MoviesList>}
    </>
  );
}
