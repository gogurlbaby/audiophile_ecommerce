// import background_image from "../../../resources/assets/home/desktop/image-hero.jpg"

function Hero() {
  return (
    <div 
     style={{
        // backgroundImage: `url(${background_image})`,
        // backgroundSize: "cover",
        // backgroundRepeat: "no-repeat",
        // backgroundPosition: "center center"
     }}
     className="2xl:pb-[32rem] 2xl:pr-[56rem] xl:pb-72 xl:pr-[45rem] lg:pl-40 lg:pr-[38rem] md:pt-32 md:pb-28 md:px-48  w-full pt-28 pb-24 px-4 bg-[url('../../../resources/assets/home/tablet/image-header.jpg')] bg-cover bg-center bg-no-repeat">
     <div className="2xl:mt-40 xl:mt-20">
       <p className="lg:text-left md:mb-6 text-[#FFF] text-center text-sm font-normal tracking-[10px] opacity-50 mb-4">NEW PRODUCT</p>
       <h4 className="lg:text-left lg:text-[3.5rem] lg:leading-[58px] lg:tracking-[2px] md:mb-6 text-[#FFF] text-center text-4xl font-bold tracking-[1.286px] leading-[40px] mb-6">XX99 Mark II HeadphoneS</h4>
       <p className="lg:text-left md:mb-10 text-[#FFF] text-center text-base font-medium leading-[25px] opacity-75 mb-7">
       Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
       </p>
     </div>
     <div className="lg:justify-start lg:items-start flex justify-center items-center">
     <button 
      type="button" 
      className="bg-[#D87D4A] text-[#FFF] border border-solid border-[#D87D4A] px-8 py-4 text-sm font-bold tracking-[1px]">
      SEE PRODUCT
     </button>
     </div>
    </div>
  )
}

export default Hero