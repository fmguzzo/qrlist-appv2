import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/user/user.action";
import { selectUserReducer } from "../../store/user/user.selector";

import { ReactComponent as BrandLogo } from "../../assets/logo.svg";

import "./Header.styles.scss";

const Header = () => {
  const { userInfo } = useSelector(selectUserReducer);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  // return (
  //   <header className="header-container">
  //     <div className="header-brand">
  //       <Link to="/">
  //         <BrandLogo className="header-brand-logo" />
  //       </Link>
  //     </div>
  //     <div className="header-links-container">
  //       <Link className="header-link" to="/">
  //         Home
  //       </Link>
  //       <Link className="header-link" to="list">
  //         List
  //       </Link>
  //       <Link className="header-link link-push" to="login">
  //         Login
  //       </Link>
  //     </div>
  //   </header>
  // );
  return (
    <nav className="nav-container sticky">
      <ul className="nav-main">
        <li className="nav-link">
          <Link to="/">
            <BrandLogo className="nav-brand-logo" />
          </Link>
        </li>
        {userInfo ? (
          <>
            <li className="nav-link">
              <Link to="/profile">Profile</Link>
            </li>
            <li className="nav-link">
              <Link className="header-link" to="list">
                List
              </Link>
            </li>
            <li className="nav-link nav-link-right">
              <span onClick={handleLogout}>Logout</span>
            </li>
          </>
        ) : (
          <>
            <li className="nav-link nav-link-right">
              <Link to="login">Login</Link>
            </li>
            <span>|</span>
            <li className="nav-link">
              <Link to="register">Register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Header;
