import background_image from "../../../resources/assets/home/mobile/image-header.jpg"

function Hero() {
  return (
    <div 
    style={{
        backgroundImage: `url(${background_image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center"
    }}
    className="w-full h-screen">

    </div>
  )
}

export default Hero