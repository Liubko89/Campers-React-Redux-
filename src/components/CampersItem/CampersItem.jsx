import { useState } from "react";
import css from "./CampersItem.module.css";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import CamperDetailedInfo from "../CamperDetailedInfo/CamperDetailedInfo";

const CampersItem = ({ camper }) => {
  const [isOpen, setIsOpen] = useState(false);
  const onCloseModal = () => setIsOpen(false);

  const {
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
  } = camper;

  return (
    <div className={css.wrapper}>
      <div className={css.imageContainer}>
        <img
          className={css.image}
          src={gallery[0]}
          alt="camper image"
          width={290}
        />
      </div>

      <div className={css.titleWrapper}>
        <div className={css.title}>
          <h2 className={css.name}>{name}</h2>
          <div>
            <span className={css.price}>€{price}</span>
            <button className={css.heartBtn}>heart</button>
          </div>
        </div>
        <span className={css.rating}>
          {rating}({reviews.length} reviews)
        </span>
        <span className={css.location}>{location}</span>
      </div>

      <p className={css.description}>{description}</p>
      <ul className={css.detailsList}>
        <li className={css.detailsItem}>
          <span>{adults} adults</span>
        </li>
        <li>
          <span>{transmission}</span>
        </li>
        <li>
          <span>{engine}</span>
        </li>
        {details.kitchen > 0 && (
          <li>
            <span>kitchen</span>
          </li>
        )}
        {details.beds > 0 && (
          <li>
            {details.beds > 1 ? (
              <span>{details.beds} beds</span>
            ) : (
              <span>{details.beds} bed</span>
            )}
          </li>
        )}
        {details.airConditioner > 0 && (
          <li>
            <span>AC</span>
          </li>
        )}
      </ul>
      <button
        className={css.showMoreBtn}
        type="button"
        onClick={() => setIsOpen(true)}
      >
        Show more
      </button>

      <ModalWrapper modalIsOpen={isOpen} onCloseModal={onCloseModal}>
        <CamperDetailedInfo camper={camper} />
      </ModalWrapper>
    </div>
  );
};

export default CampersItem;
