import { useFormik } from "formik";
import * as Yup from "yup";
import { registerInputData } from "../models";
import { Button, TextInput } from "../components";
import logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import { LOGIN } from "../routes";

const validationSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Confirm Password is required"),
});

export const Register = () => {
  const navigate = useNavigate();

  const handleRegister = (values: registerInputData) => {
    console.log(values);
  };

  const redirectToLogin = () => navigate(LOGIN);

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleRegister(values);
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
              onClick={redirectToLogin}
            />
            <p className="text-lg font-semibold text-gray-900">Bugs Buddy</p>
          </div>
        </div>

        <div>
          <p className="leading-tight text-2xl font-bold text-gray-900 mb-1">
            Sign Up to your account.
          </p>
        </div>

        <div>
          <TextInput
            labelText="Username"
            id="username"
            name="username"
            type="username"
            placeholder="Username"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
            error={
              formik.touched.username && formik.errors.username
                ? formik.errors.username
                : undefined
            }
            styles="w-96"
          />
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

          <div className="grid grid-cols-2 gap-2">
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
              styles="w-[188px]"
            />
            <TextInput
              labelText="Confirm Password"
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
              error={
                formik.touched.confirmPassword && formik.errors.confirmPassword
                  ? formik.errors.confirmPassword
                  : undefined
              }
              styles="w-[188px]"
            />
          </div>
        </div>

        <Button title="Sign Up" type="submit" loading={false} />

        <div className="flex -mt-2 mb-1 m-auto">
          <p className="leading-none text-base font-medium text-gray-500">
            Already have an account?{" "}
            <span
              className="text-purple-700 cursor-pointer"
              onClick={redirectToLogin}
            >
              Sign In
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};
