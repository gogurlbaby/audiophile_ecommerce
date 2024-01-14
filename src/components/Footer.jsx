import { FaFacebookSquare, FaTwitter, FaInstagram } from "react-icons/fa";
function Footer() {
  return (
    <div className="lg:pt-20 lg:px-40 md:pt-14 md:px-10 bg-[#101010] w-full h-full pt-12 pb-10 px-4">
      <div className="lg:flex lg:justify-between lg:items-center">
      <p className="md:text-left text-[#FFF] text-center font-black tracking-widest text-lg mb-12">audiophile</p>
        <ul className="md:flex md:gap-8 md:text-left uppercase text-center mb-12">
          <li className="lg:text-[0.875rem] list-none text-base font-bold tracking-tighter pointer leading-6 mt-6">
            <a href="/" className="text-[#FFF] hover:text-[#D87D4A] no-underline">Home</a>
          </li>
          <li className="lg:text-[0.875rem] list-none text-base font-bold tracking-tighter pointer leading-6 mt-6">
            <a href="/" className="text-[#FFF] hover:text-[#D87D4A] no-underline">Headphones</a>
          </li>
          <li className="lg:text-[0.875rem] list-none text-base font-bold tracking-tighter pointer leading-6 mt-6">
            <a href="/" className="text-[#FFF] hover:text-[#D87D4A] no-underline">Speakers</a>
          </li>
          <li className="lg:text-[0.875rem] list-none text-base font-bold tracking-tighter pointer leading-6 mt-6">
            <a href="/" className="text-[#FFF] hover:text-[#D87D4A] no-underline">Earphones</a>
          </li>
        </ul>
      </div>
      <div>
        <p className="lg:max-w-lg md:text-left md:mb-20 text-[#FFF] text-center font-medium text-base leading-6 opacity-50 mb-12">
        Audiophile is an all in one stop to fulfill your audio needs. We are a small team of music lovers and sound specialists 
        who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days 
        a week.
        </p>
      </div>
      <div className="md:flex md:justify-between md:gap-4">
      <p className="md:text-left text-[#FFF] font-bold text-center text-base leading-6 opacity-50 mb-12">Copyright 2021. All Rights Reserved</p>
        <ul className="lg:relative lg:bottom-14 lg:right-0 md:justify-start flex justify-center gap-4">
          <li className="list-none pointer"><a href="/" className="text-[#FFF] hover:text-[#D87D4A]"><FaFacebookSquare size={25} /></a></li>
          <li className="list-none pointer"><a href="/" className="text-[#FFF] hover:text-[#D87D4A]"><FaTwitter size={25} /></a></li>
          <li className="list-none pointer"><a href="/" className="text-[#FFF] hover:text-[#D87D4A]"><FaInstagram size={25} /></a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer