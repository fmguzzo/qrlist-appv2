import LoginForm from "../../components/LoginForm/LoginForm.component";

import "./Login.styles.scss";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-left">
        <h1>QRList....</h1>
        <h2>THE BEST LIST ON WEB</h2>
        <h3>Try free for 1 month</h3>
      </div>
      <div className="login-right">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
