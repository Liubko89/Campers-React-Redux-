import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./Sidebar.module.css";
import { filterSchema } from "../../services/yupSchema";
import sprite from "../../assets/icons/sprite.svg";
import LabelRadio from "../LabelRadio/LabelRadio";
import { useDispatch } from "react-redux";
import { filter } from "../../redux/campers/slice";

const INITIAL_FORM_DATA = {
  location: "",
  equipment: "airConditioner",
  type: "panelTruck",
};

const Sidebar = () => {
  const dispatch = useDispatch();

  const handleSubmit = (data, actions) => {
    console.log(data);
    dispatch(filter(data));

    actions.resetForm();
  };

  return (
    <aside className={css.sideBar}>
      <Formik
        validationSchema={filterSchema}
        initialValues={INITIAL_FORM_DATA}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <div className={css.locationWrap}>
            <h2 className={css.title}>Location</h2>
            <label className={css.locationLabel}>
              <Field
                className={css.locationInput}
                type="text"
                placeholder="City"
                name="location"
                autoComplete="off"
              />
              <svg className={css.locationIcon} width="18" height="20">
                <use href={`${sprite}#icon-map-pin`}></use>
              </svg>
              <ErrorMessage
                className={css.errorMsg}
                name="location"
                component="span"
              />
            </label>
          </div>

          <div className={css.filtersWrap}>
            <h2 className={css.title}>Filters</h2>
            <h3 className={css.subTitle}>Vehicle equipment</h3>
            <ul className={css.equipList}>
              <li>
                <LabelRadio
                  icon={"icon-Vector"}
                  title={"AC"}
                  value={"airConditioner"}
                />
              </li>
              <li>
                <LabelRadio
                  icon={"icon-Container"}
                  title={"Automatic"}
                  value={"automatic"}
                />
              </li>
              <li>
                <LabelRadio
                  icon={"icon-Horizontal-container"}
                  title={"Kitchen"}
                  value={"kitchen"}
                />
              </li>
              <li>
                <LabelRadio
                  icon={"icon-Vertical-container-1"}
                  title={"TV"}
                  value={"TV"}
                />
              </li>
              <li>
                <LabelRadio
                  icon={"icon-Rating1"}
                  title={"Shower/WC"}
                  value={"bathroom"}
                />
              </li>
            </ul>

            <h3 className={css.subTitle}>Vehicle type</h3>
            <div>
              <ul className={css.equipList}>
                <li>
                  <LabelRadio
                    name={"type"}
                    width={"40"}
                    height={"28"}
                    icon={"icon-Button-2"}
                    title={"Van"}
                    value={"panelTruck"}
                  />
                </li>
                <li>
                  <LabelRadio
                    name={"type"}
                    width={"40"}
                    height={"28"}
                    icon={"icon-Button-1"}
                    title={"Fully Integrated"}
                    value={"fullyIntegrated"}
                  />
                </li>
                <li>
                  <LabelRadio
                    name={"type"}
                    width={"40"}
                    height={"28"}
                    icon={"icon-camper"}
                    title={"Alcove"}
                    value={"alcove"}
                  />
                </li>
              </ul>
            </div>
          </div>

          <button onSubmit={handleSubmit} className={css.btn} type="submit">
            <span>Search</span>
          </button>
        </Form>
      </Formik>
    </aside>
  );
};

export default Sidebar;
