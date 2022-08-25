import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer.component";
import Header from "../../components/Header/Header.component";

import "./Layout.styles.scss";

const Layout = () => {
  return (
    <div className="layout-container">
      <Header />
      <main className="main-container">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
