import { useSelector } from "react-redux";
import CampersList from "../components/CampersList/CampersList";
import { selectFavorites } from "../redux/campers/selectors";

const Favorites = () => {
  const campers = useSelector(selectFavorites);
  return <CampersList campers={campers} />;
};

export default Favorites;
