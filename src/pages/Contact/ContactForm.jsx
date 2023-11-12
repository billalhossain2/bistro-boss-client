import {BsFillSendFill} from "react-icons/bs"
import {FiSquare} from "react-icons/fi"
import captcha from "../../assets/captcha.png"
const ContactForm = () => {
  return (
   <div className="flex justify-center">
     <form className="bg-[#F3F3F3] space-y-10 p-10" action="#">
        <div className="flex md:flex-row flex-col gap-5">
           <div>
           <p className="mb-2 font-medium"><label htmlFor="name"><span>Name</span><sup>*</sup></label></p>
            <input className="px-5 py-3 outline-none border-[1px] border-gray-300 rounded-md md:w-auto w-full" type="text" placeholder='Enter your phone'/>
           </div>
            <div>
            <p className="mb-2 font-medium"><label htmlFor="email"><span>Email</span><sup>*</sup></label></p>
            <input className="px-5 py-3 outline-none border-[1px] border-gray-300 rounded-md md:w-auto w-full" type="email" placeholder='Enter your email'/>
            </div>
        </div>
        <div>
           <p className="mb-2 font-medium"><label htmlFor="phone"><span>Phone</span><sup>*</sup></label></p>
            <input className="w-full px-5 py-3 outline-none border-[1px] border-gray-300 rounded-md" type="number" placeholder='Enter your phone number'/>
        </div>
        <div>
        <p className="mb-2 font-medium"><label htmlFor="message"><span>Message</span><sup>*</sup></label></p>
            <textarea className="w-full px-5 py-3 outline-none border-[1px] border-gray-300 rounded-md" name="" id="" cols="30" rows="10" placeholder='Write your message here'></textarea>
        </div>
        <div className="flex items-center gap-2 border-[1px] border-gray-300 p-2 rounded-md w-60">
          <FiSquare className="text-2xl text-gray-500"></FiSquare>
          <p>I am not a robot</p>
          <img className="w-10" src={captcha} alt="Captcha" />
        </div>
        <button className="flex bg-gradient-to-r from-[#835D23] to-[#B58130] hover:from-[#B58130] hover:to-[#835D23] duration-500 text-white px-5 py-2 gap-2 items-center"><span>Send Message</span> <BsFillSendFill></BsFillSendFill> </button>
    </form>
   </div>
  )
}

export default ContactForm