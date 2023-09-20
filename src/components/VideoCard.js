export const VideoCard = video => {
  console.log(video);

  const str = video.itemVideo.genres.reduce((str, genres) => {
    return str + '   ' + genres.name;
  }, '');

  const userScore = Math.round(
    (Number(video.itemVideo.vote_average) * 100) / 10
  );
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <>
      <div
        style={{
          display: 'flex',
          gap: '25px',
          marginTop: '15px',
        }}
      >
        <img
          src={
            video.itemVideo.poster_path
              ? `https://image.tmdb.org/t/p/w500/${video.itemVideo.poster_path}`
              : defaultImg
          }
          width={250}
          alt="poster"
        />
        <div>
          <h2>{video.itemVideo.original_title}</h2>
          <span>User Score: {userScore} %</span>
          <h3>Overview</h3>
          <span>{video.itemVideo.overview}</span>
          <h3>Genres</h3>
          <span>{str}</span>
        </div>
      </div>
    </>
  );
};
