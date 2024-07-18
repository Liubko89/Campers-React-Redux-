import { useDispatch, useSelector } from "react-redux";
import {
  selectAllCampers,
  selectIsLoading,
  selectPage,
} from "../../redux/campers/selectors";
import CampersItem from "../CampersItem/CampersItem";
import css from "./CampersList.module.css";
import { increment } from "../../redux/campers/slice";

const CampersList = ({ campers }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const allCamp = useSelector(selectAllCampers);
  const page = useSelector(selectPage);

  return isLoading ? (
    <p>loading</p>
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

      <button
        onClick={() => {
          dispatch(increment());
          console.log(allCamp, page);
        }}
      >
        Load more
      </button>
    </>
  );
};

export default CampersList;
