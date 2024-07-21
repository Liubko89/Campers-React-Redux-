import css from "./EmptyFavorites.module.css";

const EmptyFavorites = () => {
  return (
    <div className={css.empty}>
      <h1 className={css.title}>
        You have not added any campervans to your favorites yet
      </h1>
    </div>
  );
};

export default EmptyFavorites;
