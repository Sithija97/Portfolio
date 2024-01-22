import { useFormik } from "formik";
import * as Yup from "yup";
import { loginInputs, loginWithGoogleInputs } from "../models";
import logo from "../assets/logo.svg";
import { Button, SignInWithGoogle, TextInput } from "../components";
import { useNavigate } from "react-router-dom";
import { HOME, REGISTER } from "../routes";
import { useAppDispatch } from "../store/store";
import { login, loginWithGoogle } from "../store/auth/authslice";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../config/firebase";
import { Auth_Method } from "../enums";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = async (values: loginInputs) => {
    const response = await dispatch(login(values));
    if (response.meta.requestStatus === "fulfilled") {
      formik.resetForm();
      navigate(HOME);
    }
    if (response.meta.requestStatus === "rejected") {
      alert(`Error : ${response.payload}`);
    }
  };

  const handleSignInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const { displayName, email, photoURL } = result.user;

      const userObj: loginWithGoogleInputs = {
        username: displayName!,
        email: email!,
        photo: photoURL!,
        authMethod: Auth_Method.GOOGLE,
      };

      const response = await dispatch(loginWithGoogle(userObj));

      if (response.meta.requestStatus === "fulfilled") {
        navigate(HOME);
      }
      if (response.meta.requestStatus === "rejected") {
        alert(`Error : ${response.payload}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const redirectToRegister = () => navigate(REGISTER);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleLogin(values);
    },
  });
  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col justify-center min-w-lg p-6 items-start shrink-0 gap-6 bg-white rounded-xl shadow-lg"
      >
        <div className="flex flex-col justify-center items-start self-stretch">
          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt="linkedin logo"
              className="w-8 h-8 mr-2 block"
              onClick={redirectToRegister}
            />
            <p className="text-lg font-semibold text-gray-900">Bugs Buddy</p>
          </div>
        </div>

        <div>
          <p className="leading-tight text-2xl font-bold text-gray-900 mb-1">
            Sign In to your account.
          </p>
        </div>

        <div className="w-full flex gap-4">
          <div className="flex-col items-start mb-1">
            <TextInput
              labelText="Email"
              id="email"
              name="email"
              type="email"
              placeholder="sample@email.com"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              error={
                formik.touched.email && formik.errors.email
                  ? formik.errors.email
                  : undefined
              }
              styles="w-96"
            />
            <TextInput
              labelText="Password"
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              error={
                formik.touched.password && formik.errors.password
                  ? formik.errors.password
                  : undefined
              }
              styles="w-96"
            />
          </div>
        </div>

        <div className="flex -my-2">
          <p className="leading-none text-base font-medium text-purple-700">
            Forgot Password?
          </p>
        </div>

        <Button title="Sign In" type="submit" loading={false} />

        <div className="m-auto">
          <p className="leading-none text-base font-medium text-gray-500">or</p>
        </div>

        <SignInWithGoogle onClick={handleSignInWithGoogle} />

        <div className="flex -mt-2 mb-1 m-auto">
          <p className="leading-none text-base font-medium text-gray-500">
            Don't have an account?{" "}
            <span
              className="text-purple-700 cursor-pointer"
              onClick={redirectToRegister}
            >
              Sign Up
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};
