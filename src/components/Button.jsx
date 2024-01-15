import { MdKeyboardArrowRight } from "react-icons/md";

export function ProductButton() {
  return (
    <>
      <div className="lg:justify-start lg:items-start flex justify-center items-center">
        <button 
        type="button" 
        className="bg-[#D87D4A] uppercse text-[#FFF] hover:bg-[#FBAF85] hover:border-[#FBAF85] border border-solid border-[#D87D4A] px-8 py-4 text-sm font-bold tracking-[1px]">
        See Product
       </button>
     </div>
    </>
  )
}

export function ShopButton() {
    return (
        <>
          <div className="flex gap-1 justify-center items-center pointer hover:text-[#D87D4A] text-[#000]">
            <button
             type="button"
             className="uppercase outline-none border-0 text-sm font-bold text-center tracking-[1px]"
            >
             Shop
            </button>
            <MdKeyboardArrowRight size={20} className="" />
          </div>
        </>
    )
}

export function SeeProductButton() {
    return (
        <>
          <div className="flex justify-center items-center">
            <button
             type="button"
             className="hover:bg-[#4C4C4C] hover:border-[#4C4C4C] bg-[#000] text-[#FFF] uppercase border border-solid border-[#000] px-8 py-4 text-sm font-bold tracking-[1px]"
            >
             See Product
            </button>
          </div>
        </>
    )
}