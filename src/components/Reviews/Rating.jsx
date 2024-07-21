import sprite from "../../assets/icons/sprite.svg";
import css from "./Rating.module.css";

const Rating = ({ rating }) => {
  return (
    <ul className={css.list}>
      {Array(0, 1, 2, 3, 4).map((e, i) => {
        return (
          <li key={i}>
            <svg
              className={e < rating ? css.yellowStar : css.greyStar}
              width="16"
              height="16"
            >
              <use href={`${sprite}#icon-Rating`}></use>
            </svg>
          </li>
        );
      })}
    </ul>
  );
};

export default Rating;
