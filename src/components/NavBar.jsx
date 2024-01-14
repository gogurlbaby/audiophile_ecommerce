import { GiHamburgerMenu } from "react-icons/gi"
import { BsCart3 } from "react-icons/bs"
import { useState } from "react"
import logo from "../../resources/assets/shared/desktop/logo.svg"

function NavBar() {
const [toggle, setToggle] = useState(false)  

  return (
    <div className="w-full bg-[#0E0E0E] py-8">
      <div className="">
        <GiHamburgerMenu size={20} className="lg:hidden block text-[#FFF]" onClick={() => setToggle(!toggle)} />
      </div>
      <div className="lg:flex lg:justify-around">
      <a href="/" className="no-underline pointer">
        <img src={logo} alt="logo" />
      </a>
        {
          toggle ?
          <ul className="lg:hidden sm:block uppercase">
          <li className="list-none mb-8 text-base font-bold tracking-tighter pointer leading-6">
            <a href="/" className="text-[#FFF] hover:text-[#D87D4A] no-underline">Home</a>
          </li>
          <li className="list-none mb-8 text-base font-bold tracking-tighter pointer leading-6">
            <a href="/" className="text-[#FFF] hover:text-[#D87D4A] no-underline">Headphones</a>
          </li>
          <li className="list-none mb-8 text-base font-bold tracking-tighter pointer leading-6">
            <a href="/" className="text-[#FFF] hover:text-[#D87D4A] no-underline">Speakers</a>
          </li>
          <li className="list-none text-base font-bold tracking-tighter pointer leading-6">
            <a href="/" className="text-[#FFF] hover:text-[#D87D4A] no-underline">Earphones</a>
          </li>
        </ul>
        : 
        null
        }
        
        {
          toggle ? 
          null
          :
          <ul className="lg:flex lg:gap-8 uppercase">
          <li className="list-none lg:text-[0.875rem] font-bold tracking-tighter pointer leading-6">
            <a href="/" className="text-[#FFF] hover:text-[#D87D4A] no-underline">Home</a>
          </li>
          <li className="list-none lg:text-[0.875rem] font-bold tracking-tighter pointer leading-6">
            <a href="/" className="text-[#FFF] hover:text-[#D87D4A] no-underline">Headphones</a>
          </li>
          <li className="list-none lg:text-[0.875rem] font-bold tracking-tighter pointer leading-6">
            <a href="/" className="text-[#FFF] hover:text-[#D87D4A] no-underline">Speakers</a>
          </li>
          <li className="list-none lg:text-[0.875rem] font-bold tracking-tighter pointer leading-6">
            <a href="/" className="text-[#FFF] hover:text-[#D87D4A] no-underline">Earphones</a>
          </li>
        </ul>
        }
       <a href="/" className="text-[#FFF] pointer"><BsCart3  size={20} /></a>
      </div>
    </div>
  )
}

export default NavBar