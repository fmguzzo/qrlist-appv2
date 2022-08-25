import { useEffect } from "react";
import { Formik, Form } from "formik";
import loginSchema from "./LoginForm.schema";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Message from "../Message/Message.component";
import InputField from "../InputField/InputField.component";
import { loginAsync } from "../../store/user/user.action";
import { selectUserReducer } from "../../store/user/user.selector";

import "./LoginForm.styles.scss";

const LoginForm = ({ history }) => {
  const { userInfo, error } = useSelector(selectUserReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginSubmitHandler = ({ email, password }, { setErrors }) => {
    return dispatch(loginAsync(email, password));
  };

  useEffect(() => {
    if (userInfo) {
      navigate("/list");
    }
  }, [navigate, userInfo]);

  return (
    <div className="login-form-container">
      <div className="login-form">
        <h4>Sign In</h4>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={loginSchema}
          onSubmit={loginSubmitHandler}
        >
          {({ isSubmitting }) => (
            <Form>
              <InputField
                fieldClass=""
                labelClass=""
                inputClass=""
                label="Email"
                name="email"
                type="email"
              />

              <InputField
                fieldClass=""
                labelClass=""
                inputClass=""
                label="Password"
                name="password"
                type="password"
              />

              {/* TODO: Implement Forgot Password? */}
              <Link to="/login">Forgot Password?</Link>
              <br />
              <button type="submit" className="form-button">
                {isSubmitting ? "Wait..." : "Login"}
              </button>
            </Form>
          )}
        </Formik>

        <div>
          New Seller? <Link to="/register">Register here</Link>
        </div>
      </div>
      <div>{error && <Message variant="danger">{error}</Message>}</div>
    </div>
  );
};

export default LoginForm;
