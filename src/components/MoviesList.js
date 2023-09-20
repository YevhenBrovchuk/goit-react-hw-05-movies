import { MoviesListItem } from './MoviesListItem';

export const MoviesList = ({ videoItems, locat }) => {
  return (
    <>
      <h2>Trending today</h2>
      <ul>
        {videoItems.map(item => (
          <li key={item.id}>
            <MoviesListItem videoItem={item} locat={locat} />
          </li>
        ))}
      </ul>
    </>
  );
};
