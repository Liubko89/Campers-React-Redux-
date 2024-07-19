import { useSelector } from "react-redux";
import { selectIsLoading } from "../../redux/campers/selectors";
import CampersItem from "../CampersItem/CampersItem";
import css from "./CampersList.module.css";
import Loader from "../Loader/Loader";

const CampersList = ({ campers }) => {
  const isLoading = useSelector(selectIsLoading);

  return isLoading ? (
    <Loader />
  ) : (
    <>
      {campers.length > 0 && (
        <ul className={css.list}>
          {campers.map((camper) => {
            return (
              <li className={css.item} key={camper.id}>
                <CampersItem camper={camper} />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default CampersList;
