import { Link, Outlet } from 'react-router-dom';
import { Header, Wrapper } from './Layout.styled';
import { Loader } from './Loader';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <Wrapper>
      <Header>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Wrapper>
  );
};
