import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <h4>Header</h4>
      <nav>
        <Link to="/">Home</Link> | <Link to="list">List</Link> |{' '}
        <Link to="login">Login</Link>
      </nav>
    </div>
  );
};

export default Header;
