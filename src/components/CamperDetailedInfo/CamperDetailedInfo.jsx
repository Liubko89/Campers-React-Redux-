import BookingForm from "../BookingForm/BookingForm";
import css from "./CamperDetailedInfo.module.css";

const CamperDetailedInfo = ({
  camper: {
    name,
    price,
    rating,
    location,
    reviews,
    gallery,
    description,
    details,
    engine,
    transmission,
    adults,
  },
}) => {
  return (
    <div className={css.wrapper}>
      <div className={css.titleWrapper}>
        <h2>{name}</h2>
        <span className={css.rating}>
          {rating}({reviews.length} reviews)
        </span>
        <span className={css.location}>{location}</span>
        <div>
          <span className={css.price}>€{price}</span>
        </div>
        <ul className={css.imageList}>
          <li>
            <div className={css.imageWrapper}>
              <img className={css.image} src={gallery[0]} alt="camper image" />
            </div>
          </li>
          <li>
            <div className={css.imageWrapper}>
              <img className={css.image} src={gallery[1]} alt="camper image" />
            </div>
          </li>
          <li>
            <div className={css.imageWrapper}>
              <img className={css.image} src={gallery[2]} alt="camper image" />
            </div>
          </li>
        </ul>
        <p className={css.description}>{description}</p>
      </div>
      <button type="button">Features</button>
      <button type="button">Reviews</button>
      <div>
        <BookingForm />
      </div>
    </div>
  );
};

export default CamperDetailedInfo;
