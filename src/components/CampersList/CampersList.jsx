import { useSelector } from "react-redux";
import { selectCampers } from "../../redux/campers/selectors";
import CampersItem from "./CampersItem";

const CampersList = () => {
  const campers = useSelector(selectCampers);
  return (
    campers.length !== 0 &&
    Array.isArray(campers) && (
      <ul>
        {campers.map((camper) => {
          return (
            <li key={camper._id}>
              <CampersItem camper={camper} />
            </li>
          );
        })}
      </ul>
    )
  );
};

export default CampersList;
