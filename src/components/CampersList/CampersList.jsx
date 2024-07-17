import { useSelector } from "react-redux";
import { selectCampers } from "../../redux/campers/selectors";
import CampersItem from "../CampersItem/CampersItem";
import css from "./CampersList.module.css";

const CampersList = () => {
  const campers = useSelector(selectCampers);
  return (
    campers.length !== 0 &&
    Array.isArray(campers) && (
      <ul className={css.list}>
        {campers.map((camper) => {
          return (
            <li className={css.item} key={camper.id}>
              <CampersItem camper={camper} />
            </li>
          );
        })}
      </ul>
    )
  );
};

export default CampersList;
