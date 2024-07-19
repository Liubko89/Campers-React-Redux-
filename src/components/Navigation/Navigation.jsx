import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";

const bildLinkClass = ({ isActive }) => clsx(css.link, isActive && css.active);

const Navigation = () => {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <NavLink className={bildLinkClass} to={"/"}>
          Home
        </NavLink>
        <NavLink className={bildLinkClass} to={"/catalog"}>
          Catalog
        </NavLink>
        <NavLink className={bildLinkClass} to={"/favorites"}>
          Favorites
        </NavLink>
      </nav>
    </header>
  );
};

export default Navigation;
