const Reviews = ({ reviews }) => {
  return (
    <ul>
      {reviews.map(({ reviewer_name, comment, reviewer_rating }, i) => {
        return (
          <li key={i}>
            <div>
              <span>{reviewer_name[0]}</span>
              <h3>{reviewer_name}</h3>
              <span>{reviewer_rating}</span>
              <p>{comment}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Reviews;
