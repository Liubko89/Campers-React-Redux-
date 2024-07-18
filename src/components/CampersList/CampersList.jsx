import { useDispatch, useSelector } from "react-redux";
import {
  selectFullList,
  selectIsLoading,
  selectPage,
} from "../../redux/campers/selectors";
import CampersItem from "../CampersItem/CampersItem";
import css from "./CampersList.module.css";
import { increment } from "../../redux/campers/slice";
import { loadMoreCampers } from "../../redux/campers/operations";

const CampersList = ({ campers }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const isFullList = useSelector(selectFullList);
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

      {!isFullList && (
        <button
          onClick={() => {
            dispatch(increment());
            dispatch(loadMoreCampers(page));
          }}
        >
          Load more
        </button>
      )}
    </>
  );
};

export default CampersList;
