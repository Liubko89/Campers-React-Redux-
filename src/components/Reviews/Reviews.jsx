import Rating from "./Rating";
import css from "./Reviews.module.css";

const Reviews = ({ reviews }) => {
  return (
    <ul className={css.list}>
      {reviews.map(({ reviewer_name, comment, reviewer_rating }, i) => {
        return (
          <li key={i}>
            <div className={css.wrapper}>
              <span className={css.letterIcon}>{reviewer_name[0]}</span>
              <h3 className={css.name}>{reviewer_name}</h3>
              <span className={css.rating}>
                <Rating rating={reviewer_rating} />
              </span>
            </div>
            <p className={css.comment}>{comment}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Reviews;
