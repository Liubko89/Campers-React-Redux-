import CampersList from "../components/CampersList/CampersList";
import { useSelector } from "react-redux";
import {
  selectFilteredCampers,
  selectFullList,
  selectIsLoading,
} from "../redux/campers/selectors";
import LoadMoreBtn from "../components/LoadMoreBtn/LoadMoreBtn";
import Sidebar from "../components/Sidebar/Sidebar";
import Container from "../components/Container/Container";

const Catalog = () => {
  const campers = useSelector(selectFilteredCampers);
  const isFullList = useSelector(selectFullList);
  const isLoading = useSelector(selectIsLoading);

  return (
    <Container>
      <div>
        <CampersList campers={campers} />
        {!isFullList && !isLoading && <LoadMoreBtn />}
      </div>

      <Sidebar />
    </Container>
  );
};

export default Catalog;
