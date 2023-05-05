import React from 'react';
import { useFormik } from "formik";
import * as yup from 'yup';


const validationSchema = yup.object({
  email: yup.string()
    .email("Invalid email format")
    .required("Email address is required"),
  password: yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long"),
});


function Login() {

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    }
  });

  return (
    <>
      <div className='container d-flex justify-content-center m-8'>
        <div className='col-4 m-5'>
          <main className="form-signin w-100 m-auto ">
            <form onSubmit={formik.handleSubmit}>
              <h1 className="h3 mb-3 fw-normal d-flex justify-content-center">Please sign in</h1>

              <div className="form-floating">
                <input type="email" name='email' className="form-control" id="floatingInput" required placeholder="name@example.com" onChange={formik.handleChange} value={formik.values.email} />
                <label for="floatingInput">Email address</label>
              </div>
              <div className="form-floating">
                <input type="password" name='password' className="form-control" id="floatingPassword" required placeholder="Password" onChange={formik.handleChange} value={formik.values.password} />
                <label for="floatingPassword">Password</label>
              </div>

              <div className="checkbox mb-3">
                <label>
                  <input type="checkbox" value="remember-me" name='remember_me' /> Remember me
                </label>
              </div>
              <button className="w-100 btn btn-lg btn-primary m-1" type="submit">Sign in</button>
             
            </form>
            </main>
        </div>
      </div>
    </>
  );
}


export default Login;
