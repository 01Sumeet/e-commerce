import "./SignUp.css";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputField from "../../Assets/InputField";
import Button from "../../Assets/Button";
import { useFetch } from "../../Hook/useFetch";
import SignIn from "./SignIn";
// import ToastMessage from "../../Assets/Toaster";
import { useState } from "react";
import { useAxios } from "../../Hook/useAxios";

// Main Component
const Welcome = () => {
  const [showMsg, setShowMsg] = useState(false);
  const initialValues = {
    firstName: "",
    email: "",
    password: "",
    photo: null,
  };
  // For file upload
  // https://freeimage.host/api/1/upload?key=6d207e02198a847aa98d0a2a901485a5
  // For form data upload
  // "https://646caca27b42c06c3b2bc2d8.mockapi.io/getData"
  // const { fetchdata } = useFetch("https://646caca27b42c06c3b2bc2d8.mockapi.io/getData",true, "POST");

  const apiUrl = "https://v2.convertapi.com/upload";
  const { data, isLoading, error, axiosData } = useAxios(
    "https://v2.convertapi.com/upload",
    false,
    "POST"
  );

  const handleSubmit = async (values) => {
    debugger;

    console.log("init", values);
    const { email, firstName, password, photo } = values;
    console.log("i am ", photo);
    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("photo", photo);
    await axiosData(formData);
    // formData.append("File", values.photo);

    // axiosData("https://v2.convertapi.com/upload", formData);
    setShowMsg(true);
    // resetForm();
  };

  const FormValues = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
    photo: Yup.string().required("Please upload a photo"),
  });
  const signIn = () => {
    const container = document.getElementById("container");
    container.classList.add("right-panel-active");
  };
  // To switch between login and sign up
  const signUp = () => {
    const container = document.getElementById("container");
    container.classList.remove("right-panel-active");
  };
  // We have created seprated Formik,Form and value objects, for each individual data.
  return (
    <>
      <div className="container" id="container">
        <div className="form-container sign-up-container">
          <Formik
            initialValues={initialValues}
            validationSchema={FormValues}
            onSubmit={handleSubmit}
          >
            {(formikProps) => (
              <Form id="form">
                <h1 className="createAccount">Create Account</h1>
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
                <span>or use your email for registration</span>
                <InputField
                  name="firstName"
                  type="text"
                  placeholder="Name"
                  value={formikProps.values.firstName}
                  onChange={formikProps.handleChange("firstName")}
                  error={
                    formikProps.errors.firstName &&
                    formikProps.touched.firstName
                  }
                  errorMessage={formikProps.errors.firstName}
                />
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

                <InputField
                  type="file"
                  name="photo"
                  placeholder="Confirm Password"
                  onChange={(event) =>
                    formikProps.setFieldValue("photo", event.target.files[0])
                  }
                />
                <a href="#" className="already">
                  {" "}
                  Already had an account?&nbsp;
                  <p className="signup" onClick={signUp}>
                    SignIn
                  </p>
                </a>
                <Button type="submit">Sign Up</Button>
                {/* {showMsg && (
                  <ToastMessage
                    message="Sign up successful!"
                    onClose={handleCloseToast}
                  />
                )} */}
              </Form>
            )}
          </Formik>
        </div>
        <SignIn FormValues={FormValues} signIn={signIn} />
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal
                details
              </p>
              <Button className="ghost" id="signIn" onClick={signUp}>
                Sign In
              </Button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hi There!</h1>
              <p>Enter your personal details to open an account with us</p>
              <Button className="ghost" id="signUp" onClick={signIn}>
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
