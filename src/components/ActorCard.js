export const ActorCard = ({ infoActor }) => {
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  return (
    <>
      <ul>
        {infoActor.map(inf => (
          <li key={inf.id}>
            <img
              src={
                inf.img
                  ? `https://image.tmdb.org/t/p/w500/${inf.img}`
                  : defaultImg
              }
              width={50}
              alt="poster"
            />
            <span>{inf.nameActor}</span>
            <span>{inf.character}</span>
          </li>
        ))}
      </ul>
    </>
  );
};
