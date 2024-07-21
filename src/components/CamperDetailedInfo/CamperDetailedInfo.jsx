import { useState } from "react";
import BookingForm from "../BookingForm/BookingForm";
import css from "./CamperDetailedInfo.module.css";
import Features from "../Features/Features";
import Reviews from "../Reviews/Reviews";
import sprite from "../../assets/icons/sprite.svg";

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
    form,
    length,
    width,
    height,
    tank,
    consumption,
  },
}) => {
  const [showReviews, setShowReviews] = useState(false);

  return (
    <div className={css.wrapper}>
      <div className={css.titleWrapper}>
        <h2>{name}</h2>
        <span className={css.rating}>
          <svg className={css.ratingIcon} width="16" height="16">
            <use href={`${sprite}#icon-Rating`}></use>
          </svg>
          {rating}({reviews.length} reviews)
        </span>
        <span className={css.location}>
          <svg className={css.locationIcon} width="16" height="16">
            <use href={`${sprite}#icon-map-pin`}></use>
          </svg>
          {location}
        </span>

        <span className={css.price}>€{price.toFixed(2)}</span>

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
      <div className={css.btnWrapper}>
        <button
          className={showReviews ? css.table : css.activeTable}
          type="button"
          onClick={() => {
            setShowReviews(false);
          }}
        >
          Features
        </button>
        <button
          className={showReviews ? css.activeTable : css.table}
          type="button"
          onClick={() => {
            setShowReviews(true);
          }}
        >
          Reviews
        </button>
      </div>
      <div className={css.bottomWrapper}>
        {!showReviews && (
          <Features
            adults={adults}
            transmission={transmission}
            airConditioner={details.airConditioner}
            engine={engine}
            kitchen={details.kitchen}
            beds={details.beds}
            freezer={details.freezer}
            CD={details.CD}
            radio={details.radio}
            hob={details.hob}
            form={form}
            length={length}
            width={width}
            height={height}
            tank={tank}
            consumption={consumption}
          />
        )}
        {showReviews && <Reviews reviews={reviews} />}
        <BookingForm />
      </div>
    </div>
  );
};

export default CamperDetailedInfo;
