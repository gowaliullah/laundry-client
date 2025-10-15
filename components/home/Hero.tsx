import banner from "@/public/assets/Rectangle.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative w-full h-full">
      <Image className="w-full h-full object-cover" src={banner} width={1250} height={780} alt="Hero banner" />
      
      {/* Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

      {/* Title centered */}
      <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl font-bold">
        A service related Tag line
      </h1>
    </div>
  );
};

export default Hero;
