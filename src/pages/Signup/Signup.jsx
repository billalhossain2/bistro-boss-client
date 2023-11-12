import img from "../../assets/others/authentication2.png";
import bg from "../../assets/others/authentication.png";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="pb-10 mb-20 pt-40 flex justify-center items-center px-2"
    >
      <div className="flex lg:flex-row flex-col-reverse justify-between flex-col items-center border-2 border-gray-300 rounded-md shadow-xl lg:px-16 px-3 py-10 lg:gap-0 gap-10">
        <div>
          <h1 className="mb-5 text-3xl font-bold text-center">Sign Up</h1>
          <form className="flex flex-col gap-5" action="">
            <div>
              <label className="inline-block mb-2" htmlFor="email">
                Email
              </label>{" "}
              <br />
              <input
                className="px-5 py-2 rounded-md border-[1px] border-gray-300 outline-none w-full"
                type="text"
                placeholder="Type here"
              />
            </div>
            <div>
              <label className="inline-block mb-2" htmlFor="password">
                Password
              </label>{" "}
              <br />
              <input
                className="px-5 py-2 rounded-md border-[1px] border-gray-300 outline-none w-full"
                type="password"
                placeholder="Enter your password"
              />
            </div>
            <div>
              <input
                className="px-5 py-2 rounded-md border-[1px] border-gray-300 outline-none w-full"
                type="text"
                readOnly
              />{" "}
              <br />
              <label className="inline-block mt-2" htmlFor="reload">
                Reload Captcha
              </label>
            </div>
            <div>
              <input
                className="px-5 py-2 rounded-md border-[1px] border-gray-300 outline-none w-full"
                type="text"
                placeholder="Type here"
              />
            </div>
            <button className="bg-[#D1A054B2] text-white font-bold px-5 py-2 rounded-md">
              Sign Up
            </button>
          </form>
          <div className="flex flex-col items-center gap-3 mt-5">
            <p className="text-[#D1A054] font-bold text-center">
              Already registered?{" "}
              <Link className="hover:underline">Go to log in</Link>{" "}
            </p>
          </div>
        </div>
        <div>
          <img className="lg:w-[400px] w-full" src={img} alt="Login Image" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
