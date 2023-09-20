export const ReviewsCard = ({ infoReviews }) => {
  return (
    <>
      <ul>
        {infoReviews.map(inf => (
          <li key={inf.id}>
            <h3>{inf.author}</h3>
            <span>{inf.content}</span>
          </li>
        ))}
      </ul>
    </>
  );
};
