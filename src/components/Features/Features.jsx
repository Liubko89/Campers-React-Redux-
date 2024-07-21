import css from "./Features.module.css";
import sprite from "../../assets/icons/sprite.svg";

const Features = ({
  adults,
  transmission,
  airConditioner,
  engine,
  kitchen,
  beds,
  freezer,
  CD,
  radio,
  hob,
  form,
  length,
  width,
  height,
  tank,
  consumption,
}) => {
  return (
    <div>
      <ul className={css.list}>
        <li className={css.listItem}>
          <span className={css.item}>
            <svg className={css.icon} width="20" height="20">
              <use href={`${sprite}#icon-Users`}></use>
            </svg>
            {adults} adults
          </span>
        </li>
        <li className={css.listItem}>
          <span className={css.item}>
            <svg className={css.iconTransmission} width="20" height="20">
              <use href={`${sprite}#icon-Container`}></use>
            </svg>
            {transmission}
          </span>
        </li>
        <li className={css.listItem}>
          <span className={css.item}>
            <svg className={css.icon} width="20" height="20">
              <use href={`${sprite}#icon-Users`}></use>
            </svg>
            {airConditioner} AC
          </span>
        </li>
        <li className={css.listItem}>
          <span className={css.item}>
            <svg className={css.icon} width="20" height="20">
              <use href={`${sprite}#icon-Vertical-container`}></use>
            </svg>
            {engine}
          </span>
        </li>
        <li className={css.listItem}>
          <span className={css.item}>
            <svg className={css.iconKitchen} width="20" height="20">
              <use href={`${sprite}#icon-Horizontal-container`}></use>
            </svg>
            {kitchen}kitchen
          </span>
        </li>
        <li className={css.listItem}>
          <span className={css.item}>
            <svg className={css.iconBeds} width="20" height="20">
              <use href={`${sprite}#icon-Container-1`}></use>
            </svg>
            {beds} beds
          </span>
        </li>
        <li className={css.listItem}>
          <span className={css.item}>
            <svg className={css.iconFreezer} width="20" height="20">
              <use
                href={`${sprite}#icon-streamline_hotel-air-conditioner`}
              ></use>
            </svg>
            {freezer} air conditioner
          </span>
        </li>
        {CD && (
          <li className={css.listItem}>
            <span className={css.item}>
              <svg className={css.iconCD} width="20" height="20">
                <use href={`${sprite}#icon-icon-park-outline_cd`}></use>
              </svg>
              CD
            </span>
          </li>
        )}
        {radio && (
          <li className={css.listItem}>
            <span className={css.item}>
              <svg className={css.iconRadio} width="20" height="20">
                <use href={`${sprite}#icon-solar_radio-linear`}></use>
              </svg>
              radio
            </span>
          </li>
        )}
        <li className={css.listItem}>
          <span className={css.item}>
            <svg className={css.iconHob} width="20" height="20">
              <use
                href={`${sprite}#icon-icon-park-outline_hand-painted-plate`}
              ></use>
            </svg>
            {hob} hob
          </span>
        </li>
      </ul>
      <h3 className={css.detailsTitle}>Vehicle details</h3>
      <ul className={css.detailsList}>
        <li>
          <div className={css.detailsWrap}>
            <span>Form</span>
            <span>{form}</span>
          </div>
        </li>
        <li>
          {" "}
          <div className={css.detailsWrap}>
            <span>Length</span>
            <span>{length}</span>
          </div>
        </li>
        <li>
          <div className={css.detailsWrap}>
            <span>Width</span>
            <span>{width}</span>
          </div>
        </li>
        <li>
          <div className={css.detailsWrap}>
            <span>Height</span>
            <span>{height}</span>
          </div>
        </li>
        <li>
          <div className={css.detailsWrap}>
            <span>Tank</span>
            <span>{tank}</span>
          </div>
        </li>
        <li>
          <div className={css.detailsWrap}>
            <span>Consumption</span>
            <span>{consumption}</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Features;
