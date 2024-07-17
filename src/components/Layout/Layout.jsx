import Container from "../Container/Container";
import Navigation from "../Navigation/Navigation";

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <Container>
        <main>{children}</main>
      </Container>
    </>
  );
};

export default Layout;
