import { Link } from 'react-router-dom';

export const MoviesListItem = ({ videoItem: { id, name }, locat }) => {
  return (
    <Link to={`/movies/${id}`} state={{ from: locat }}>
      <span>{name}</span>
    </Link>
  );
};
