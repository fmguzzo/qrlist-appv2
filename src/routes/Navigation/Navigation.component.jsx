import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer/Footer.component';
import Header from '../../components/Header/Header.component';

const Navigation = () => {
  return (
    <div className="navigation-container">
      <Header />
      <main className="main-container">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Navigation;
