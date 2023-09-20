import { Loader } from 'components/Loader';
import { VideoCard } from 'components/VideoCard';
import { fetchVideoById } from 'helperApi';
import { Suspense, useEffect, useRef, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';

export default function MoviesDetails() {
  const params = useParams();
  const [video, setVideo] = useState(null);
  const location = useLocation();
  const abortFetch = useRef();
  const goBack = location.state?.from ?? '/';

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function fetchVideo() {
      if (abortFetch.current) {
        abortFetch.current.abort();
      }
      abortFetch.current = new AbortController();

      try {
        setLoading(true);
        const fetchVideo = await fetchVideoById(
          params.movieId,
          abortFetch.current.signal
        );
        setVideo(fetchVideo);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchVideo();
  }, [params.movieId]);

  return (
    <>
      {loading && <Loader />}

      {video && (
        <>
          <NavLink to={goBack}>"Back"</NavLink>
          <VideoCard itemVideo={video}></VideoCard>
          <div
            style={{
              marginTop: '20px',
              borderTop: '2px solid black',
              borderBottom: '2px solid black',
            }}
          >
            <span>Additional information</span>
            <ul>
              <li>
                <Link to="cast" state={{ ...location.state }}>
                  Cast
                </Link>
              </li>
              <li>
                <Link to="reviews" state={{ ...location.state }}>
                  Reviews
                </Link>
              </li>
            </ul>
          </div>
        </>
      )}
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
}
