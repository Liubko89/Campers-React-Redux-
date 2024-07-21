import { useState } from "react";
import css from "./CampersItem.module.css";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import CamperDetailedInfo from "../CamperDetailedInfo/CamperDetailedInfo";
import { useDispatch, useSelector } from "react-redux";
import { favorite } from "../../redux/campers/slice";
import { selectFavorites } from "../../redux/campers/selectors";
import sprite from "../../assets/icons/sprite.svg";

const CampersItem = ({ camper }) => {
  const favorites = useSelector(selectFavorites);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const onCloseModal = () => setIsOpen(false);

  const {
    id,
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
          <div className={css.priceBtnWrap}>
            <span className={css.price}>€{price.toFixed(2)}</span>
            <button
              className={css.btn}
              onClick={() => {
                dispatch(favorite(id));
              }}
            >
              <svg
                className={
                  !favorites.find((el) => el.id === id)
                    ? css.heartBtn
                    : css.redHeart
                }
                width="24"
                height="24"
              >
                <use href={`${sprite}#icon-Heart`}></use>
              </svg>
            </button>
          </div>
        </div>

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
      </div>

      <p className={css.description}>{description}</p>

      <ul className={css.detailsList}>
        <li>
          <span className={css.detailsItem}>
            <svg width="20" height="20">
              <use href={`${sprite}#icon-Users`}></use>
            </svg>
            {adults} adults
          </span>
        </li>
        <li>
          <span className={css.detailsItem}>
            <svg className={css.icon} width="20" height="20">
              <use href={`${sprite}#icon-Container`}></use>
            </svg>
            {transmission}
          </span>
        </li>
        <li>
          <span className={css.detailsItem}>
            <svg width="20" height="20">
              <use href={`${sprite}#icon-Vertical-container`}></use>
            </svg>
            {engine}
          </span>
        </li>
        {details.kitchen > 0 && (
          <li>
            <span className={css.detailsItem}>
              <svg className={css.icon} width="20" height="20">
                <use href={`${sprite}#icon-Horizontal-container`}></use>
              </svg>
              kitchen
            </span>
          </li>
        )}
        {details.beds > 0 && (
          <li>
            <span className={css.detailsItem}>
              <svg className={css.icon} width="20" height="20">
                <use href={`${sprite}#icon-Container-1`}></use>
              </svg>
              {details.beds} {details.beds > 1 ? "beds" : "bed"}
            </span>
          </li>
        )}
        {details.airConditioner > 0 && (
          <li>
            <span className={css.detailsItem}>
              <svg width="20" height="20">
                <use href={`${sprite}#icon-Vector`}></use>
              </svg>
              AC
            </span>
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
