// Desgin Formik Yup Api
import React from 'react'
import imgAuth from '../../assets/Side Image.png';
import {useFormik} from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import {useNavigate}from 'react-router-dom'
// import toast from 'react-hot-toast';

export default function Login() {

  let navigate=useNavigate()

  // Api
async  function LoginData(values) {
   let {data} =await axios.post(`https://note-sigma-black.vercel.app/api/v1/users/signIn`,values)
   console.log(data);
  //  toast.success("Welcome To Login",{position:"top-right"})
   navigate("/home")
   
  }
  // Yup
  let validationSchema=Yup.object({
    email:Yup.string().email("Email Invaild").required("Email is required"),
    password:Yup.string().matches(/^[A-Z][a-z0-9]{5,8}$/,"Password Should Start With Capital").required("Password is required"),
  })

  // Formik
  let formikAuth=useFormik({
initialValues:{
  email:"",
  password:"",
},
validationSchema:validationSchema,
onSubmit:(value)=>LoginData(value)

  })
  return <>
  <div className="container">
    <div className="row">
      <div className="col-md-6 mt-3">
        <img src={imgAuth} className='w-100  mb-3' alt="" />
      </div>
      <div className="col-md-6 mt-3">
        <h1 className='titlecolor text-center'>Login Now</h1>
        <form onSubmit={formikAuth.handleSubmit}>
          {/* Email */}
    <div className="form-group">
      <label htmlFor="Email" className='mb-2 h5 notfound'>Email</label>
      <input className='form-control trend' id='Email'
       type="email" name='email' placeholder='Email'
       value={formikAuth.values.email}
       onChange={formikAuth.handleChange}
       onBlur={formikAuth.handleBlur}
       />
       {formikAuth.errors.email&&formikAuth.touched.email?<div className='alert alert-danger'>{formikAuth.errors.email}</div>:""}
    </div>
    <div className="form-group">
      <label htmlFor="Password" className='mb-2 h5 notfound mt-2'>Password</label>
      <input className='form-control trend' id='Password'
       type="password" name='password' placeholder='Password'
       value={formikAuth.values.password}
       onChange={formikAuth.handleChange}
       onBlur={formikAuth.handleBlur}
       />
            {formikAuth.errors.password&&formikAuth.touched.password?<div className='alert alert-danger'>{formikAuth.errors.password}</div>:""}
  
    </div>
  
  <div className=" d-flex justify-content-center mt-3">
  <button type='submit' className=' border border-none p-2 px-4 rounded rounded-2 bg text-white '>Login</button>
  </div>
  </form>

      </div>
    </div>
  </div>
  
  </>
}