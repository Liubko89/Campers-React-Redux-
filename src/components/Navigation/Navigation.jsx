import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <header>
      <nav>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/catalog"}>Catalog</NavLink>
        <NavLink to={"/favorites"}>Favorites</NavLink>
      </nav>
    </header>
  );
};

export default Navigation;
