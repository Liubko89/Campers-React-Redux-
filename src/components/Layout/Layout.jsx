import Container from "../Container/Container";
import Navigation from "../Navigation/Navigation";
import Sidebar from "../Sidebar/Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <Container>
        <main>{children}</main>
        <Sidebar />
      </Container>
    </>
  );
};

export default Layout;
