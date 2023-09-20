import { fetchVideoActor } from 'helperApi';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from './Loader';
import { ActorCard } from './ActorCard';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const abortFetch = useRef();

  useEffect(() => {
    async function fetchVideo() {
      if (abortFetch.current) {
        abortFetch.current.abort();
      }
      abortFetch.current = new AbortController();

      try {
        setLoading(true);
        const fetchVideo = await fetchVideoActor(
          movieId,
          abortFetch.current.signal
        );
        const destrFetchVideo = fetchVideo.cast.map(item => ({
          img: item.profile_path,
          character: item.character,
          nameActor: item.name,
        }));
        setCast(destrFetchVideo);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchVideo();
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {cast && <ActorCard infoActor={cast}></ActorCard>}
    </>
  );
}
