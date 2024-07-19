import { useDispatch, useSelector } from "react-redux";
import { increment } from "../../redux/campers/slice";
import { loadMoreCampers } from "../../redux/campers/operations";
import { selectPage } from "../../redux/campers/selectors";

const LoadMoreBtn = () => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  return (
    <button
      onClick={() => {
        dispatch(increment());
        dispatch(loadMoreCampers(page));
      }}
    >
      Load more
    </button>
  );
};

export default LoadMoreBtn;
