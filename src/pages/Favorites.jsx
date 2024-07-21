import { useSelector } from "react-redux";
import CampersList from "../components/CampersList/CampersList";
import { selectFavorites } from "../redux/campers/selectors";
import EmptyFavorites from "../components/EmptyFavorites/EmptyFavorites";

const Favorites = () => {
  const campers = useSelector(selectFavorites);
  return campers.length > 0 ? (
    <CampersList campers={campers} />
  ) : (
    <EmptyFavorites />
  );
};

export default Favorites;
