import { Link } from "react-router-dom"
import img from "../../assets/others/authentication2.png"
import bg from "../../assets/others/authentication.png"
import {BiLogoFacebook, BiLogoGoogle, BiLogoGithub} from "react-icons/bi"
const Login = () => {
  return (
    <div style={
      {
        backgroundImage:`url(${bg})`,
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover'
      }
    }
    className="pb-10 mb-20 pt-40 flex justify-center items-center px-5"
    >
      <div className="flex lg:flex-row flex-col items-center justify-center border-2 border-gray-300 rounded-md shadow-xl px-5 py-10">
      <div>
        <img className="lg:w-[60%] w-full" src={img} alt="Login Image" />
      </div>
      <div>
      <h1 className="mb-5 text-3xl font-bold text-center">Login</h1>
      <form className="flex flex-col gap-5" action="">
         <div>
          <label className="inline-block mb-2" htmlFor="email">Email</label> <br />
          <input className="px-5 py-2 rounded-md border-[1px] border-gray-300 outline-none w-full" type="text" placeholder="Type here"/>
         </div>
         <div>
          <label className="inline-block mb-2" htmlFor="password">Password</label> <br />
          <input className="px-5 py-2 rounded-md border-[1px] border-gray-300 outline-none w-full" type="password" placeholder="Enter your password"/>
         </div>
         <div>
          <input className="px-5 py-2 rounded-md border-[1px] border-gray-300 outline-none w-full" type="text" readOnly/> <br />
          <label className="inline-block mt-2" htmlFor="reload">Reload Captcha</label>
         </div>
         <div>
          <input className="px-5 py-2 rounded-md border-[1px] border-gray-300 outline-none w-full" type="text" placeholder="Type here"/>
         </div>
         <button className="bg-[#D1A054B2] text-white font-bold px-5 py-2 rounded-md">Sign In</button>
      </form>
      <div className="flex flex-col items-center gap-3 mt-5">
      <p className="text-[#D1A054] font-bold text-center">New here? <Link className="hover:underline">Create a New Account</Link> </p>
      <p className="font-bold">Or sign in with</p>
      <div className="flex gap-5 text-5xl">
        <BiLogoFacebook className="border-2 border-gray-800 cursor-pointer duration-300  rounded-full p-1 hover:bg-gray-800 hover:text-white"></BiLogoFacebook>
        <BiLogoGoogle className="border-2 border-gray-800 cursor-pointer duration-300  rounded-full p-1 hover:bg-gray-800 hover:text-white"></BiLogoGoogle>
        <BiLogoGithub className="border-2 border-gray-800 cursor-pointer duration-300  rounded-full p-1 hover:bg-gray-800 hover:text-white"></BiLogoGithub>
      </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Login