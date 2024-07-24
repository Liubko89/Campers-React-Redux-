import { Field } from "formik";
import css from "./LabelRadio.module.css";
import sprite from "../../assets/icons/sprite.svg";

const LabelRadio = ({
  name = "equipment",
  width = "32",
  height = "32",
  icon,
  value,
  title,
}) => {
  return (
    <label className={css.label}>
      <span className={css.contentWrap}>
        <svg className={css.icon} width={width} height={height}>
          <use href={`${sprite}#${icon}`}></use>
        </svg>
        <span className={css.text}>{title}</span>
      </span>
      <Field className={css.radio} type="radio" name={name} value={value} />
    </label>
  );
};

export default LabelRadio;
