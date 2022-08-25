import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerAsync, reset } from "../../store/user/user.action";
import { selectUserReducer } from "../../store/user/user.selector";
import { Formik, Form } from "formik";
import registerSchema from "./Register.schema";

import Message from "../../components/Message/Message.component";
import InputField from "../../components/InputField/InputField.component";

import "./Register.styles.scss";

const Register = () => {
  const { userInfo, error } = useSelector(selectUserReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegisterSubmit = (
    { firstName, lastName, email, password, passwordConfirmation },
    { setErrors }
  ) => {
    return dispatch(
      registerAsync(firstName, lastName, email, password, passwordConfirmation)
    );
  };

  // TODO: why effect (reset()) is called two times?
  useEffect(() => {
    dispatch(reset());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (userInfo === "Registered") {
      dispatch(reset());
      navigate("/login");
    }
  }, [userInfo, navigate, dispatch]);

  return (
    <div className="register-container">
      <h4>Sign Up</h4>

      <div className="mt-4">
        {error && <Message variant="danger">{error}</Message>}
      </div>

      <Formik
        initialValues={{
          email: "",
          password: "",
          firstName: "",
          lastName: "",
          passwordConfirmation: "",
        }}
        validationSchema={registerSchema}
        onSubmit={handleRegisterSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField
              fieldClass=""
              labelClass=""
              inputClass=""
              label="First Name"
              name="firstName"
              type="text"
            />
            <InputField
              fieldClass=""
              labelClass=""
              inputClass=""
              label="Last Name"
              name="lastName"
              type="text"
            />
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
            <InputField
              fieldClass=""
              labelClass=""
              inputClass=""
              label="Confirm Password"
              name="passwordConfirmation"
              type="password"
            />

            <button type="submit" className="mb-4 w-50">
              {isSubmitting ? "Wait...." : "Continue"}
            </button>
          </Form>
        )}
      </Formik>

      <div className="py-3">
        Have an Account? <Link to={"/login"}>Login</Link>
      </div>
    </div>
  );
};

export default Register;
