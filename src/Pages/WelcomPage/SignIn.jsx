import { Formik, Form } from "formik";
import Button from "../../Assets/Button";
import InputField from "../../Assets/InputField";
import * as Yup from "yup";

const SignIn = (props) => {
  const initialValues = { email: "", password: "" };
  const handleSubmit = (values) => {
    alert(JSON.stringify(values));
  };

  return (
    <div className="form-container sign-in-container">
      <Formik
        initialValues={initialValues}
        validationSchema={props.FormValues}
        onSubmit={() => {
          alert("Hello!");
        }}
      >
        {(formikProps) => (
          <Form id="form1">
            <h1>Sign in</h1>
            <div className="social-container">
              <a href="#" className="social">
                <i className="fab fa-github" />
              </a>
              <a href="#" className="social">
                <i className="fab fa-google-plus-g" />
              </a>
              <a href="#" className="social">
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
            <span>or use your account</span>

            <InputField
              name="email"
              type="email"
              placeholder="Email"
              value={formikProps.values.email}
              onChange={formikProps.handleChange("email")}
              error={formikProps.errors.email && formikProps.touched.email}
              errorMessage={formikProps.errors.email}
            />
            <InputField
              name="password"
              type="password"
              placeholder="Password"
              value={formikProps.values.password}
              onChange={formikProps.handleChange("password")}
              error={
                formikProps.errors.password && formikProps.touched.password
              }
              errorMessage={formikProps.errors.password}
            />
            <a href="#">
              Forgot your password?{" "}
              <span className="signup" onClick={props.signIn}>
                SignUp
              </span>
            </a>
            <Button type="submit">Sign In</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignIn;
