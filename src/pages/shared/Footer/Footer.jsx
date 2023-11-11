import {BiLogoFacebook} from "react-icons/bi"
import {BsTwitter, BsInstagram} from "react-icons/bs"
import {FaLinkedinIn} from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="footer gap-0 h-[400px] text-white flex md:flex-row flex-col items-center">
      <div className="bg-[#1F2937] md:w-[50%] w-full h-full flex md:justify-center items-center md:pl-0 pl-3">
      <nav>
        <header className="mb-5">CONTACT US</header>
        <div className="space-y-2 text-gray-400">
        <p>123 ABS Street, Uni 21, Bangladesh</p>
        <p>+88 123456789</p>
        <p>Mon - Fri: 08:00 - 22:00</p>
        <p>Sat - Sun: 10:00 - 23:00</p>
        </div>
      </nav>
      </div>

      <div className="bg-[#111827] md:w-[50%] w-full h-full flex md:justify-center items-center md:pl-0 pl-3">
      <nav>
      <header className="mb-5">FOLLOW US</header>
      <div className="space-y-2 text-gray-300">
        <p>Join us on social media</p>
        <div className="flex gap-5 text-gray-400">
          <BiLogoFacebook className="text-2xl font-bold hover:text-white cursor-pointer"></BiLogoFacebook>
          <BsTwitter className="text-2xl font-bold hover:text-white cursor-pointer"></BsTwitter>
          <FaLinkedinIn className="text-2xl font-bold hover:text-white cursor-pointer"></FaLinkedinIn>
          <BsInstagram className="text-2xl font-bold hover:text-white cursor-pointer"></BsInstagram>
        </div>
      </div>
      </nav>
      </div>
    </footer>
  )
};

export default Footer;
