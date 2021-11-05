import { Footer, NavBar } from "..";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
