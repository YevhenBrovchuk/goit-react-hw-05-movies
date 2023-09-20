import { Formik } from 'formik';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export function SearchForm({ onQueryChange }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const videoName = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!videoName) return;
    onQueryChange(videoName);
  }, [videoName, onQueryChange]);

  function handleSubmit(values, action) {
    const query = values.query;
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);

    action.resetForm();
  }

  return (
    <Formik initialValues={{ query: '' }} onSubmit={handleSubmit}>
      <form>
        <input type="text" name="query" autoFocus autoComplete="off" />

        <button type="submit">Go</button>
      </form>
    </Formik>
  );
}
