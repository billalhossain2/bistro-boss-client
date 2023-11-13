import { Link, useNavigate } from "react-router-dom"
import img from "../../assets/others/authentication2.png"
import bg from "../../assets/others/authentication.png"
import {BiLogoFacebook, BiLogoGoogle, BiLogoGithub} from "react-icons/bi"
import { Helmet } from "react-helmet"

import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useState } from "react"

import { useForm } from "react-hook-form"
import { authContext } from "../../providers/AuthProvider"
import { toast } from "react-toastify"

const Login = () => {
  const { register, handleSubmit, formState:{errors} } = useForm()
 const [disabled, setDisabled] = useState(true)

 const {user, signInWithGoogle, signInEmailPwd} = useContext(authContext);
 const navigate = useNavigate()

  useEffect(()=>{
    loadCaptchaEnginge(6);
  }, [])

  const handleCaptcha = ev =>{
    const captchaValue = ev.target.value;

    if(validateCaptcha(captchaValue, false)){
      setDisabled(false)
    }else{
      setDisabled(true)
    }
  }

  const onSubmit = (data)=>{
    const {email, password} = data;
    signInEmailPwd(email, password)
    .then(()=>{
      toast.success("Login success!", {autoClose:1000})
      navigate("/")
    })
    .catch(error=>{
      toast.error(error.message, {autoClose:1000})
    })
  }

  const handleGoogleLogin = ()=>{
    signInWithGoogle()
    .then(()=>{
      toast.success("Login success!", {autoClose:1000})
      navigate("/")
    })
    .catch((error)=>{
      toast.error(error.message, {autoClose:1000})
    })
  }


  return (
    <div style={
      {
        backgroundImage:`url(${bg})`,
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover'
      }
    }
    className="flex justify-center items-center px-5"
    >
      <Helmet>
       <title>Login | Bistro Boss</title>
       </Helmet>
      <div className="flex my-20 lg:flex-row flex-col items-center justify-center border-2 border-gray-300 rounded-md shadow-xl px-5 py-10">
      <div>
        <img className="lg:w-[60%] w-full" src={img} alt="Login Image" />
      </div>
      <div>
      <h1 className="mb-5 text-3xl font-bold text-center">Login</h1>
      <form className="flex flex-col gap-5" action="" onSubmit={handleSubmit(onSubmit)}>
         <div>
          <label className="inline-block mb-2" htmlFor="email">Email</label> <br />
          <input {...register('email', {required:"Email Address is required"})} className="px-5 py-2 rounded-md border-[1px] border-gray-300 outline-none w-full" type="text" placeholder="Type here"/>
         {errors.email && <p className="text-red-500">{errors.email.message}</p>}
         </div>
         <div>
          <label className="inline-block mb-2" htmlFor="password">Password</label> <br />
          <input {...register('password', {required:true})} className="px-5 py-2 rounded-md border-[1px] border-gray-300 outline-none w-full" type="password" placeholder="Enter your password"/>
          {errors.password && <p className="text-red-500">Password field is required</p>}
         </div>
         <div>
          <label className="inline-block mt-2" htmlFor="captcha">
          <LoadCanvasTemplate />
          </label>
         </div>
         <div>
          <input onChange={handleCaptcha} className="px-5 py-2 rounded-md border-[1px] border-gray-300 outline-none w-full" name="captcha" type="text" placeholder="Type here"/>
         </div>
         <button disabled={disabled} className={`${disabled ? 'bg-[#d19f546e]' : 'bg-[#d19f54]'} text-white font-bold px-5 py-2 rounded-md`}>Sign In</button>
      </form>
      <div className="flex flex-col items-center gap-3 mt-5">
      <p className="text-[#D1A054] font-bold text-center">New here? <Link className="hover:underline">Create a New Account</Link> </p>
      <p className="font-bold">Or sign in with</p>
      <div className="flex gap-5 text-5xl">
        <BiLogoFacebook className="border-2 border-gray-800 cursor-pointer duration-300  rounded-full p-1 hover:bg-gray-800 hover:text-white"></BiLogoFacebook>
        <BiLogoGoogle onClick={handleGoogleLogin} className="border-2 border-gray-800 cursor-pointer duration-300  rounded-full p-1 hover:bg-gray-800 hover:text-white"></BiLogoGoogle>
        <BiLogoGithub className="border-2 border-gray-800 cursor-pointer duration-300  rounded-full p-1 hover:bg-gray-800 hover:text-white"></BiLogoGithub>
      </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Login