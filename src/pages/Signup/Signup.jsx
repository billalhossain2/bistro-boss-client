import img from "../../assets/others/authentication2.png";
import bg from "../../assets/others/authentication.png";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
const Signup = () => {
  const {register, handleSubmit, formState:{errors}} = useForm()
  const onSubmit = (data)=>{
    const {name, photoUrl, email, password} = data;
    alert('Signup Now........')
  }
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
          <form className="flex flex-col gap-5" action="" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="inline-block mb-2" htmlFor="email">
                Name
              </label>{" "}
              <br />
              <input
                {...register('name', {required:true})}
                className="px-5 py-2 rounded-md border-[1px] border-gray-300 outline-none w-full"
                type="text"
                placeholder="Type here"
              />
              {errors.name && <p className="text-red-500">Name is required</p>}
            </div>
            <div>
              <label className="inline-block mb-2" htmlFor="email">
                Photo
              </label>{" "}
              <br />
              <input
                {...register('photoUrl', {required:true})}
                className="px-5 py-2 rounded-md border-[1px] border-gray-300 outline-none w-full"
                type="url"
                placeholder="Type here"
              />
              {errors.photoUrl && <p className="text-red-500">Photo Url is required</p>}
            </div>
            <div>
              <label className="inline-block mb-2" htmlFor="email">
                Email
              </label>{" "}
              <br />
              <input
                {...register('email', {required:true})}
                className="px-5 py-2 rounded-md border-[1px] border-gray-300 outline-none w-full"
                type="email"
                placeholder="Type here"
              />
              {errors.email && <p className="text-red-500">Email is required</p>}
            </div>
            <div>
              <label className="inline-block mb-2" htmlFor="password">
                Password
              </label>{" "}
              <br />
              <input
                {...register('password', 
                {
                  required:true, 
                  pattern:/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{6,20}$/,
                  minLength:6,
                  maxLength:20
                })}
                className="px-5 py-2 rounded-md border-[1px] border-gray-300 outline-none w-full"
                type="password"
                placeholder="Enter your password"
              />
              {/* sample password: billa$Hossain76 */}
              {errors.password?.type === "pattern" && <p className="text-red-500">Password should contain at least one digit, one lowercase, one uppercase and one special character.</p>}
              {errors.password?.type === "required" && <p className="text-red-500">Password is required</p>}
              {errors.password?.type === "minLength" && <p className="text-red-500">Password must be at least 6 characters longer.</p>}
              {errors.password?.type === "maxLength" && <p className="text-red-500">Password must be lower than or equal to 20 characters.</p>}
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
