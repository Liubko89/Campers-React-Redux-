import Navigation from "../Navigation/Navigation";

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />

      <main>{children}</main>
    </>
  );
};

export default Layout;
