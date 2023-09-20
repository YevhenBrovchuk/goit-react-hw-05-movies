import { fetchVideoReviews } from 'helperApi';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from './Loader';
import { ReviewsCard } from './ReviewsCard';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
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
        const fetchVideo = await fetchVideoReviews(
          movieId,
          abortFetch.current.signal
        );

        const destrFetchVideo = fetchVideo.results.map(item => ({
          id: item.id,
          author: item.author,
          content: item.content,
        }));
        setReviews(destrFetchVideo);
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
      {reviews && <ReviewsCard infoReviews={reviews}></ReviewsCard>}
      {reviews.length === 0 && (
        <div>We don't have any reviews for this movie</div>
      )}
    </>
  );
}
