import CampersList from "../components/CampersList/CampersList";
import { useSelector } from "react-redux";
import { selectCampers } from "../redux/campers/selectors";

const Catalog = () => {
  const campers = useSelector(selectCampers);

  return <CampersList campers={campers} />;
};

export default Catalog;
