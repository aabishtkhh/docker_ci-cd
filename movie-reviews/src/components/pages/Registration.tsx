import { Formik, Form, ErrorMessage, Field } from "formik";
import { useNavigate } from "react-router/";
import UserService from "../service/UserService";
import NavigationBar from "../organisms/NavigationBar";

const Registration = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="reg">
      <NavigationBar />
        <h1>Login</h1>
        <Formik
          initialValues={{ email: "", password: "" }}
          enableReinitialize
          onSubmit={(values, { setSubmitting }) => {
            UserService()
              .logIn(values.email, values.password)
              .then((response) => {
                console.log((response))
                navigate("/reviews/admin", { replace: true });
              });
            setSubmitting(false);
          }}
        >
          {({ isSubmitting, isValid }) => (
            <Form>
              <label htmlFor="email">
                <br />
                Username:
                <br />
              </label>
              <Field type="text" name="email" />
              <ErrorMessage name="email" component="div" />
              <label htmlFor="password">
                <br />
                <br />
                Password
                <br />
              </label>
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" />
              <br />
              <button type="submit" disabled={isSubmitting || !isValid}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Registration;