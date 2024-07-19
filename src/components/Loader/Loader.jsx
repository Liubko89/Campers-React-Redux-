import { FidgetSpinner } from "react-loader-spinner";
import css from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={css.LoaaderWrap}>
      <FidgetSpinner
        visible={true}
        height="160"
        width="160"
        ariaLabel="fidget-spinner-loading"
        wrapperStyle={{}}
        wrapperClass="fidget-spinner-wrapper"
      />
    </div>
  );
};

export default Loader;
