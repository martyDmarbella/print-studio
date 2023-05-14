import React from 'react';
import { useFormik } from "formik";
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/login.css'
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';



const loginValidationSchema = yup.object({
  email: yup.string()
    .email("Invalid email format")
    .required("Email address is required"),
  password: yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long"),
});

const registerValidationSchema = yup.object({
  name: yup.string()
    .required("Name is required")
    .min(4, "Name must be at least 4 characters long"),
  email: yup.string()
    .email("Invalid email format")
    .required("Email address is required"),
  password: yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long"),
});


function Login() {

  const loginFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit: (values) => {
      axios.post('http://127.0.0.1:3306/api/login', {
        name: values.name,
        email: values.email,
        password: values.password
      }).then((response) => {
        const { data } = response;
        alert(data.message);
        localStorage.setItem('userToken', data.token);
      }).catch((err) => {
        console.error(err);
      });
    }
  });
  const registerFormik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: registerValidationSchema,
    onSubmit: (values) => {
      axios.post('http://127.0.0.1:3306/api/register', {
        name: values.name,
        email: values.email,
        password: values.password
      }).then((response) => {
        const { data } = response;
        alert(data.message);
        localStorage.setItem('userToken', data.token);
      }).catch((err) => {
        console.error(err);
      });
    }
  });

  // const navigate = useNavigate();
  // const navigateToAccount = () => {
  //   navigate('/account');
  // }


  return (
    <>
      <Helmet title='Login'>
        <CommonSection title='Sign-in/Sign-up' />

        <div class="section">
            <div class="row justify-content-center">
              <div class="col-12 text-center align-self-center py-5">
                <div class="section pb-5 pt-5 pt-sm-2 text-center">
                  <h6 class="mb-0 pb-3"><span>Log In</span><span>Sign Up</span></h6>
                  <input class="checkbox" type="checkbox" id="reg-log" name="reg-log" />
                  <label for="reg-log"></label>
                  <div class="card-3d-wrap mx-auto">
                    <div class="card-3d-wrapper">
                      <div class="card-front">
                        <div class="center-wrap">
                          <div class="section text-center">
                            <h4 class="pb-3">
                              <img src="https://inevelle.sirv.com/assets/images/logo_white_sign%20in.svg" alt="logo" style={{width:"200px"}}/>
                            </h4>
                            
                            <form onSubmit={loginFormik.handleSubmit} class="container">
                              <div class="form-group">
                                <input type="email" name="email" class="form-style" placeholder="Your Email" id="logemail" required autocomplete="off" onChange={loginFormik.handleChange} value={loginFormik.values.email} />
                                <i class="input-icon uil uil-at"></i>
                              </div>
                              <div class="form-group mt-2">
                                <input type="password" name="password" class="form-style" placeholder="Your Password" id="logpass" required autocomplete="off" onChange={loginFormik.handleChange} value={loginFormik.values.password} />
                                <i class="input-icon uil uil-at"></i>
                              </div>
                              <a href="#" class="btn mt-4" type='submit' 
                              // onClick={navigateToAccount} 
                              >submit</a>
                              <p class="mb-0 mt-4 text-center"><a href="#0" class="link">Forgot your password?</a></p>
                            </form>
                          </div>
                        </div>
                      </div>
                      <div class="card-back">
                        <div class="center-wrap">
                          <div class="section text-center">
                            <h4 class="pb-3">
                            <img src="https://inevelle.sirv.com/assets/images/logo_white_sign_up.svg" alt="logo" style={{width:"200px"}}/>
                            </h4>
                            
                            <form onSubmit={registerFormik.handleSubmit} class="container">
                              <div class="form-group">
                                <input type="text" name="name" class="form-style" placeholder="Your Full Name" id="logname" required autocomplete="off" onChange={registerFormik.handleChange} value={registerFormik.values.name} />
                                <i class="input-icon uil uil-user"></i>
                              </div>
                              <div class="form-group mt-2">
                                <input type="email" name="email" class="form-style" placeholder="Your Email" id="logemail" required autocomplete="off" onChange={registerFormik.handleChange} value={registerFormik.values.email} />
                                <i class="input-icon uil uil-at"></i>
                              </div>
                              <div class="form-group mt-2">
                                <input type="password" name="password" class="form-style" placeholder="Your Password" id="logpass" required autocomplete="off" onChange={registerFormik.handleChange} value={registerFormik.values.password} />
                                <i class="input-icon uil uil-lock-alt"></i>
                              </div>
                              <a href="#" class="btn mt-4" 
                              type='submit'
                              // onClick={navigateToAccount}
                              >submit</a>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </Helmet>
    </>
  );
}


export default Login;
