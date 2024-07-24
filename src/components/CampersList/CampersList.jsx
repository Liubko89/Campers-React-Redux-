import { useDispatch, useSelector } from "react-redux";
import { selectIsLoading } from "../../redux/campers/selectors";
import CampersItem from "../CampersItem/CampersItem";
import css from "./CampersList.module.css";
import Loader from "../Loader/Loader";
import { useEffect } from "react";
import { getCampers } from "../../redux/campers/operations";

const CampersList = ({ campers }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getCampers());
  }, [dispatch]);

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
